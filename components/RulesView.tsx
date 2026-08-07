import type { RuleBlock, RulesSet } from "@/lib/types";
import SpeakButton from "@/components/quest/SpeakButton";
import styles from "./RulesView.module.css";

interface Props {
  rules: RulesSet;
  /** Показать только эти правила (для встраивания в юнит) — тогда оглавление скрыто
   *  и блоки рендерятся «плоско», без вложенных карточек. */
  onlyIds?: string[];
}

/** Один блок правила: заголовок, суть, объяснение, таблица, примеры, ошибки. */
function Block({ block, flat }: { block: RuleBlock; flat?: boolean }) {
  return (
    <article id={block.id} className={`${styles.block} ${flat ? styles.blockFlat : ""}`}>
      <h3 className={styles.blockTitle}>{block.title}</h3>
      <div className={styles.summary}>💡 {block.summary}</div>
      {block.body.map((paragraph, i) => (
        <p key={i} className={styles.body}>
          {paragraph}
        </p>
      ))}
      {block.table && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.table.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className={styles.examplesTitle}>Примеры</div>
      {block.examples.map((ex) => (
        <div key={ex.en} className={styles.example}>
          <SpeakButton text={ex.en} />
          <div className={styles.exampleText}>
            <span className={styles.exampleEn}>{ex.en}</span>
            <span className={styles.exampleRu}>{ex.ru}</span>
          </div>
        </div>
      ))}
      {block.mistakes && block.mistakes.length > 0 && (
        <>
          <div className={styles.examplesTitle}>Типичные ошибки</div>
          {block.mistakes.map((m) => (
            <div key={m.wrong} className={styles.mistake}>
              <span className={styles.wrong}>{m.wrong}</span>
              <span>→</span>
              <span className={styles.right}>{m.right}</span>
              <span className={styles.mistakeNote}>{m.note}</span>
            </div>
          ))}
        </>
      )}
    </article>
  );
}

/** Грамматический справочник уровня: оглавление, правила, таблицы, примеры, ошибки. */
export default function RulesView({ rules, onlyIds }: Props) {
  // Встроенный режим (внутри юнита): плоский список нужных блоков, без карточек и оглавления.
  if (onlyIds) {
    const blocks = rules.groups
      .flatMap((g) => g.blocks)
      .filter((b) => onlyIds.includes(b.id));
    return (
      <div className={styles.flatList}>
        {blocks.map((block) => (
          <Block key={block.id} block={block} flat />
        ))}
      </div>
    );
  }

  return (
    <div>
      <nav className={styles.toc} aria-label="Оглавление правил">
        {rules.groups.flatMap((group) =>
          group.blocks.map((block) => (
            <a key={block.id} href={`#${block.id}`} className={styles.tocLink}>
              {block.title}
            </a>
          ))
        )}
      </nav>

      {rules.groups.map((group) => (
        <section key={group.heading} className={styles.group}>
          <h2 className={styles.groupHeading}>{group.heading}</h2>
          {group.blocks.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </section>
      ))}
    </div>
  );
}
