/** Озвучка через встроенный Web Speech API — бесплатно и офлайн. */
export function speak(text: string, lang = "en-GB") {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.92;
  window.speechSynthesis.speak(u);
}

/** Озвучка длинного фрагмента (аудирование): предложения проигрываются подряд с паузами. */
export function speakSequence(texts: string[], lang = "en-GB") {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  texts.forEach((t) => {
    const u = new SpeechSynthesisUtterance(t);
    u.lang = lang;
    u.rate = 0.88;
    window.speechSynthesis.speak(u);
  });
}

export function stopSpeech() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
}
