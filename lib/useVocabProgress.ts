"use client";

import { useEffect, useState } from "react";
import { getVocabProgressSnapshot, type VocabMap } from "@/lib/vocabulary";

/** Прогресс читается после маунта, чтобы SSR-разметка совпадала с клиентской. */
export function useVocabProgress(): VocabMap {
  const [map, setMap] = useState<VocabMap>({});
  useEffect(() => {
    setMap(getVocabProgressSnapshot());
  }, []);
  return map;
}
