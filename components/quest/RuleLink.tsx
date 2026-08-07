"use client";

import Link from "next/link";
import styles from "./quest.module.css";

export interface RuleRef {
  href: string;
  title: string;
}

/** Компактная ссылка «📖 Правило» — ведёт к нужному блоку справочника уровня. */
export default function RuleLink({ rule }: { rule?: RuleRef }) {
  if (!rule) return null;
  return (
    <div>
      <Link href={rule.href} className={styles.ruleLink}>
        📖 Правило: {rule.title}
      </Link>
    </div>
  );
}
