const STORAGE_KEY = "codentalk-writing-drafts-v1";

export type DraftMap = Record<string, string>;

export function draftKey(courseSlug: string, promptSlug: string): string {
  return `${courseSlug}:${promptSlug}`;
}

export function readDrafts(): DraftMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function saveDraft(courseSlug: string, promptSlug: string, text: string) {
  if (typeof window === "undefined") return;
  const map = readDrafts();
  map[draftKey(courseSlug, promptSlug)] = text;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

export function countWords(text: string): number {
  return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
}
