"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SpeechRecognitionResultLike {
  transcript: string;
}

interface UseSpeechRecognition {
  supported: boolean;
  listening: boolean;
  transcript: string;
  error: string | null;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

/** Обёртка над Web Speech API (SpeechRecognition) — без сервера, только в браузере. */
export function useSpeechRecognition(lang = "en-GB"): UseSpeechRecognition {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const Ctor =
      typeof window !== "undefined" &&
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
    if (!Ctor) {
      setSupported(false);
      return;
    }
    setSupported(true);
    const recognition = new Ctor();
    recognition.lang = lang;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: { results: ArrayLike<ArrayLike<SpeechRecognitionResultLike>> }) => {
      const said = Array.from(event.results)
        .map((r) => r[0]?.transcript ?? "")
        .join(" ")
        .trim();
      setTranscript(said);
    };
    recognition.onerror = (event: { error: string }) => {
      setError(event.error === "no-speech" ? "Не расслышал — попробуй ещё раз" : "Ошибка распознавания");
      setListening(false);
    };
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      recognition.abort();
    };
  }, [lang]);

  const start = useCallback(() => {
    if (!recognitionRef.current) return;
    setError(null);
    setTranscript("");
    try {
      recognitionRef.current.start();
      setListening(true);
    } catch {
      // уже запущено — игнорируем повторный вызов
    }
  }, []);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setError(null);
  }, []);

  return { supported, listening, transcript, error, start, stop, reset };
}
