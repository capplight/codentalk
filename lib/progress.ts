"use client";

import { useEffect, useState } from "react";

/**
 * Прогресс живёт в localStorage — сайт работает без аккаунтов и бэкенда.
 * Ключ прогресса главы: "<courseSlug>/<chapterSlug>".
 */

const STORAGE_KEY = "codentalk-progress-v1";

export interface ChapterProgress {
  done: boolean;
  hints: number;
  completedAt: string;
}

export type ProgressMap = Record<string, ChapterProgress>;

export function chapterKey(courseSlug: string, chapterSlug: string): string {
  return `${courseSlug}/${chapterSlug}`;
}

function readProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function saveChapterDone(courseSlug: string, chapterSlug: string, hints: number) {
  if (typeof window === "undefined") return;
  const map = readProgress();
  const key = chapterKey(courseSlug, chapterSlug);
  const prev = map[key];
  map[key] = {
    done: true,
    // при перепрохождении храним лучший результат
    hints: prev ? Math.min(prev.hints, hints) : hints,
    completedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

/** Прогресс читается после маунта, чтобы SSR-разметка совпадала с клиентской. */
export function useProgress(): ProgressMap {
  const [map, setMap] = useState<ProgressMap>({});
  useEffect(() => {
    setMap(readProgress());
  }, []);
  return map;
}
