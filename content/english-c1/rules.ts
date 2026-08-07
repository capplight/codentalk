import type { RulesSet } from "@/lib/types";

const rules: RulesSet = {
  intro:
    "Уровень C1: почти свободное владение. Здесь меньше «новых слов» и больше тонкостей — как расставлять акценты, звучать убедительно и по-деловому, понимать живую речь носителей и строить сложные, но естественные фразы. Это последний шаг перед тем, как язык перестаёт ощущаться как язык.",
  groups: [
    {
      heading: "Гипотезы и предположения",
      blocks: [
        {
          id: "mixed-conditionals",
          title: "Смешанные условные предложения",
          summary: "Прошлое влияет на настоящее: If I hadn't started this, I wouldn't be here now.",
          body: [
            "Смешанное условное соединяет разные времена в одном предложении, когда причина и следствие относятся к разным моментам: нереальное условие в прошлом → результат в настоящем.",
            "Формула: If + Past Perfect, would + глагол (без to). Второй тип — наоборот: постоянное свойство в настоящем определяет результат в прошлом: If she weren't so stubborn, she wouldn't have quit.",
          ],
          table: {
            head: ["Тип", "If-часть", "Результат"],
            rows: [
              ["Прошлое → настоящее", "If I hadn't left my job (Past Perfect)", "I wouldn't be here now (would + V)"],
              ["Настоящее → прошлое", "If she weren't so proud (Past Simple)", "she wouldn't have quit (would have + V3)"],
            ],
          },
          examples: [
            { en: "If I hadn't started this project, I wouldn't be speaking here today.", ru: "Если бы я не начал этот проект, я бы сейчас здесь не выступал." },
            { en: "If he weren't so busy, he would have come to the conference.", ru: "Если бы он не был так занят, он бы приехал на конференцию." },
          ],
          mistakes: [
            { wrong: "If I didn't start this, I wouldn't be here.", right: "If I hadn't started this, I wouldn't be here.", note: "Причина в прошлом требует Past Perfect в if-части, а не Past Simple." },
          ],
        },
        {
          id: "past-modals-speculation",
          title: "Модальные глаголы предположения о прошлом",
          summary: "must have + V3 — уверен, might/could have — возможно, can't have — уверен, что нет.",
          body: [
            "Чтобы предположить, что произошло в прошлом, используют модальный глагол + have + третья форма. Степень уверенности меняется по глаголу: must have — почти уверен «да», can't have — почти уверен «нет», might/could have — просто возможно.",
            "Эта конструкция звучит естественно там, где по-русски мы говорим «наверное», «должно быть», «не мог бы».",
          ],
          table: {
            head: ["Глагол", "Уверенность", "Пример"],
            rows: [
              ["must have + V3", "почти уверен, что да", "She must have left already."],
              ["might/could have + V3", "возможно", "He might have missed the email."],
              ["can't have + V3", "почти уверен, что нет", "They can't have read the report — it's too fast."],
            ],
          },
          examples: [
            { en: "You must have worked really hard on this.", ru: "Ты, должно быть, очень усердно над этим работал." },
            { en: "She can't have said that — it's not like her.", ru: "Она не могла такого сказать — это на неё не похоже." },
          ],
          mistakes: [
            { wrong: "He must has forgotten.", right: "He must have forgotten.", note: "После модального глагола всегда have, а не has, независимо от подлежащего." },
          ],
        },
      ],
    },
    {
      heading: "Эмфаза и выделение",
      blocks: [
        {
          id: "cleft-sentences",
          title: "Расщеплённые предложения (it / what)",
          summary: "It was X that… — выделяет конкретную часть. What I really want is… — выделяет мысль целиком.",
          body: [
            "Расщеплённое предложение разбивает простую мысль на две части, чтобы выделить нужный элемент. Конструкция It is/was + выделяемое + that… ставит акцент на конкретное слово.",
            "Конструкция What + подлежащее + глагол + is/was… выносит вперёд целую идею, прежде чем её назвать — это звучит более взвешенно и убедительно, чем прямое утверждение.",
          ],
          examples: [
            { en: "It was Aidana who believed in this idea first.", ru: "Именно Айдана первой поверила в эту идею." },
            { en: "What surprised me most was how fast it grew.", ru: "Больше всего меня удивило, как быстро это выросло." },
            { en: "What I really wanted was to make it free for everyone.", ru: "Чего я на самом деле хотел — сделать это бесплатным для всех." },
          ],
        },
        {
          id: "inversion",
          title: "Инверсия для эмфазы",
          summary: "Отрицательное наречие в начале → порядок слов меняется: Never had I imagined this.",
          body: [
            "Когда предложение начинается с отрицательного или ограничительного наречия (never, rarely, not only, no sooner), после него следует вопросительный порядок слов — вспомогательный глагол выходит перед подлежащим.",
            "Это литературный, ораторский приём — он звучит выразительнее, чем обычный порядок слов, и уместен в речах, статьях, презентациях.",
          ],
          table: {
            head: ["Обычный порядок", "Инверсия"],
            rows: [
              ["I had never imagined this.", "Never had I imagined this."],
              ["We not only launched the app, we also…", "Not only did we launch the app, we also…"],
              ["I had no sooner finished than the phone rang.", "No sooner had I finished than the phone rang."],
            ],
          },
          examples: [
            { en: "Never had I imagined we would reach a million users.", ru: "Никогда я не думал, что мы дойдём до миллиона пользователей." },
            { en: "Not only did we say no to the investor, we also grew faster without him.", ru: "Мы не только отказали инвестору, но и выросли быстрее без него." },
          ],
          mistakes: [
            { wrong: "Never I had imagined this.", right: "Never had I imagined this.", note: "После отрицательного наречия вспомогательный глагол выходит ПЕРЕД подлежащим." },
          ],
        },
      ],
    },
    {
      heading: "Официальный и академический язык",
      blocks: [
        {
          id: "nominalization",
          title: "Номинализация: глагол → существительное",
          summary: "decide → decision, grow → growth. Формальный текст опирается на существительные, не глаголы.",
          body: [
            "В официальных и академических текстах действие часто выражают существительным, а не глаголом: We decided → Our decision was…; The company grew → The company's growth…",
            "Это делает фразу компактнее и звучит более взвешенно — характерная черта грантовых заявок, отчётов, деловых писем.",
          ],
          table: {
            head: ["Глагол", "Существительное"],
            rows: [
              ["decide", "decision"],
              ["grow", "growth"],
              ["develop", "development"],
              ["succeed", "success"],
              ["improve", "improvement"],
            ],
          },
          examples: [
            { en: "Our decision to keep the app free led to rapid growth.", ru: "Наше решение сделать приложение бесплатным привело к быстрому росту." },
            { en: "The improvement in engagement was significant.", ru: "Улучшение вовлечённости было значительным." },
          ],
        },
        {
          id: "hedging",
          title: "Hedging: осторожные формулировки",
          summary: "It could be argued that… / It seems likely that… — смягчают категоричность утверждения.",
          body: [
            "Hedging — приём, при котором утверждение подаётся как вероятное, а не абсолютное: It seems that…, It could be argued that…, This may suggest that… Это стандарт академического и делового стиля — прямые категоричные заявления там звучат неуместно.",
          ],
          examples: [
            { en: "It could be argued that free access is what made this project succeed.", ru: "Можно утверждать, что именно бесплатный доступ сделал проект успешным." },
            { en: "This may suggest that the market is bigger than we expected.", ru: "Это может говорить о том, что рынок больше, чем мы ожидали." },
          ],
        },
        {
          id: "formal-connectors",
          title: "Формальные связки: however, nevertheless, notwithstanding",
          summary: "Furthermore — далее, however/nevertheless — тем не менее, notwithstanding — несмотря на.",
          body: [
            "Формальные связки заменяют разговорные but и so в письменной и деловой речи, показывая логику текста: Furthermore (далее развивает мысль), However/Nevertheless (противопоставление), Therefore/Consequently (следствие), Notwithstanding (несмотря на, более книжное).",
          ],
          table: {
            head: ["Разговорное", "Формальное"],
            rows: [
              ["but", "however / nevertheless"],
              ["so", "therefore / consequently"],
              ["also", "furthermore / moreover"],
              ["despite", "notwithstanding"],
            ],
          },
          examples: [
            { en: "The market is competitive. Nevertheless, our approach is unique.", ru: "Рынок конкурентный. Тем не менее наш подход уникален." },
            { en: "Notwithstanding the challenges, the project moved forward.", ru: "Несмотря на трудности, проект продвигался вперёд." },
          ],
        },
      ],
    },
    {
      heading: "Живая речь носителей",
      blocks: [
        {
          id: "phrasal-verbs-advanced",
          title: "Продвинутые фразовые глаголы",
          summary: "come up with — придумать, follow up on — довести до конца, touch base — связаться коротко.",
          body: [
            "На уровне C1 фразовые глаголы становятся не опцией, а нормой живой речи — их не заменить одним словом без потери естественности.",
          ],
          table: {
            head: ["Фразовый глагол", "Значение"],
            rows: [
              ["come up with", "придумать (идею)"],
              ["follow up on", "довести до конца, напомнить"],
              ["touch base", "коротко связаться"],
              ["run by", "посоветоваться, показать на проверку"],
              ["iron out", "уладить (детали, разногласия)"],
              ["scale up", "расширить, масштабировать"],
            ],
          },
          examples: [
            { en: "Let's touch base tomorrow to iron out the details.", ru: "Давай завтра свяжемся, чтобы уладить детали." },
            { en: "We came up with the idea during a walk.", ru: "Мы придумали эту идею во время прогулки." },
          ],
        },
        {
          id: "ellipsis-substitution",
          title: "Эллипсис и замещение в живой речи",
          summary: "Носители часто опускают очевидные слова: «Want some?» вместо «Do you want some coffee?»",
          body: [
            "В непринуждённой речи части предложения, понятные из контекста, опускаются (эллипсис) или заменяются короткими словами (so, one, do): «I think so» вместо повторения всей фразы, «I did too» вместо повтора глагола.",
          ],
          examples: [
            { en: "— Are you coming? — I think so.", ru: "— Ты придёшь? — Думаю, да." },
            { en: "— I loved the talk. — I did too.", ru: "— Мне понравилось выступление. — Мне тоже." },
            { en: "Want some?", ru: "Хочешь? (сокращено от Do you want some?)" },
          ],
        },
      ],
    },
    {
      heading: "Сложные конструкции",
      blocks: [
        {
          id: "participle-clauses",
          title: "Причастные обороты",
          summary: "Having finished the report, she sent it immediately. — сокращает два предложения в одно.",
          body: [
            "Причастный оборот заменяет придаточное предложение, когда подлежащее в обеих частях одно и то же. Having + V3 показывает, что действие завершилось раньше основного; V-ing — что действия происходят одновременно или одно ведёт к другому.",
          ],
          table: {
            head: ["Два предложения", "Причастный оборот"],
            rows: [
              ["After I finished the report, I sent it.", "Having finished the report, I sent it."],
              ["Because she knew the risks, she still tried.", "Knowing the risks, she still tried."],
            ],
          },
          examples: [
            { en: "Having worked in London for years, he understood the culture well.", ru: "Проработав в Лондоне много лет, он хорошо понимал культуру." },
            { en: "Knowing how risky it was, we still said yes.", ru: "Зная, насколько это рискованно, мы всё равно согласились." },
          ],
        },
        {
          id: "reduced-relatives",
          title: "Редуцированные придаточные",
          summary: "The man who is standing there → The man standing there. Which/who + to be убираются.",
          body: [
            "Придаточное определительное можно сократить, убрав союзное слово и глагол to be, если после него идёт причастие: the woman who is speaking → the woman speaking. Это делает фразу компактнее и более естественной в письменной речи.",
          ],
          examples: [
            { en: "The article published last week got a lot of attention.", ru: "Статья, опубликованная на прошлой неделе, привлекла много внимания." },
            { en: "Anyone interested in the project can contact us.", ru: "Любой, кто заинтересован в проекте, может с нами связаться." },
          ],
        },
      ],
    },
    {
      heading: "Убедительная речь",
      blocks: [
        {
          id: "rhetorical-devices",
          title: "Приёмы убедительной речи",
          summary: "Правило трёх, анафора (повтор в начале фраз), риторический вопрос — делают речь запоминающейся.",
          body: [
            "Правило трёх: перечисление из трёх элементов звучит завершённо и убедительно (free, simple, and open to everyone). Анафора — повтор одной и той же фразы в начале нескольких предложений подряд — создаёт ритм. Риторический вопрос вовлекает слушателя, не требуя ответа.",
          ],
          examples: [
            { en: "We built it for students. We built it for teachers. We built it for anyone who ever felt left out.", ru: "Мы создали это для студентов. Мы создали это для учителей. Мы создали это для каждого, кто когда-либо чувствовал себя лишним." },
            { en: "Why should knowledge have a price?", ru: "Почему у знаний должна быть цена? (риторический вопрос)" },
            { en: "It is free, it is simple, and it is open to everyone.", ru: "Это бесплатно, это просто, и это открыто для каждого. (правило трёх)" },
          ],
        },
      ],
    },
  ],
};

export default rules;
