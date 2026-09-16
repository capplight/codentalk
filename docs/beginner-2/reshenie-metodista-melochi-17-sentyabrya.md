# Решения методиста: три мелочи, 17 сентября 2026


## 1. Модуль 16 «Как часто», урок 7 `kazhduyu-nedelyu`: `sometimes` в правиле случая `sluchay-every-i-always`

**Решение: дописывать.** Предложение редактора принято дословно.

Прочитано (`courses/english-beginner-2/kak-chasto.ts`): вступление урока 7
(с. 1810–1813), случаи `sluchay-every-day-znakomo`, `sluchay-every-week`,
`sluchay-month`, `sluchay-oborot-v-konce`, таблица `tablica-slovo-posle-every-odno`,
случай `sluchay-every-i-always`, свод `tablica-svod-uroka-7`, словарь, задания
z1–z6; урок 9 `chitaem-nedelya-aygerim`, задание `z1-otmetit-narechiya-v-zapiske`.

Доводы.

1. **Вступление противопоставляет обороту «каждый месяц» именно пару «часто» и
   «иногда».** Правило случая — место, где это противопоставление говорится
   по-английски. Сейчас из пары названа половина (`often`), а вместо второй
   стоит `always`, которого во вступлении нет. Ученик читает вступление и
   правило подряд и не находит английского слова для «иногда».
2. **Утверждение о `sometimes` верно** тем же смыслом, что об `often`: слово не
   называет промежутка между разами. Урок 1 (случай `sluchay-sometimes`, с. 255–256)
   сам говорит «о том, что бывает не каждый раз» — промежутка не называет.
3. **`always` из правила не убираем:** заголовок случая «Чем every week
   отличается от always» и первый пример `I always work at home.` стоят на нём.
4. **Общим словом «наречия частоты» не заменяем:** в список попали бы `never`
   (двух разов нет вовсе, фраза становится странной) и `usually`. Перечень
   трёх слов точнее.
5. **Порядок уроков не нарушен:** `always` и `sometimes` введены уроком 1
   (`vsegda-i-inogda`), `often` — уроком 2 (`obychno-i-chasto`); урок 7 идёт после.
6. **Задания правкой не задеты.** Ни z1–z6 урока 7, ни z1 урока 9 не спрашивают
   о `sometimes` против `every`. Разбор z1 урока 9 («В нём два слова, поэтому
   это не наречие частоты») опирается на ПЕРВОЕ предложение правила случая, а
   не на второе, — с правкой сходится.
7. **Вторая кнопка звука не появится:** `sZvukom` (`components/lesson/Ekran.tsx`,
   с. 146) берёт ключи `zvuchat` своего блока, а там только две целые строки
   примеров; одиночного `sometimes` среди ключей нет.
8. **Мерка длины:** в новом предложении 20 слов, порог 22.

**Указание редактору.** В блоке `sluchay-every-i-always`, третья строка `text`:

> было: «Слова always и often не говорят, сколько времени проходит между двумя разами, а every week говорит, что проходит неделя.»
>
> стало: «Слова always, often и sometimes не говорят, сколько времени проходит между двумя разами, а every week говорит, что проходит неделя.»

Английские строки, `zvuchat`, заголовок случая и примеры не меняются.
Перечитать после правки: свод `tablica-svod-uroka-7` (правила про наречия не
повторяет — проверено, подпись о месте оборота и числе слова) и вступление.

## 2. Модуль 9 «Цвет и размер»: расхождение источников о `the` + прилагательное

**Решение: находка разбора (`razbor-programma-i-the.md`, пункт 4) подтверждена,
строку объявить.** Обе опоры перепроверены своими глазами, и у первой нашлась
оговорка, которой в разборе нет.

### Что открыто

**English Grammar Profile** (`materials/English Grammar Profile Online.csv`,
разбор CSV по полю `id`, все строки `SubCategory = articles` и соседняя графа
`noun phrases`):

- `1741163708793x555362877047412000`, DETERMINERS / articles, **A2**,
  «FORM/USE: 'THE' + ADJECTIVES, SPECIFYING» — «Can use 'the' + adjectives in a
  noun phrase, to specify.» Примеры: «My house is opposite the new café.», «I
  think it's on the red sofa.» — подтверждено.
- `1741163708789x344483096716751800`, articles, A1, «FORM: 'A' + ADJECTIVES» —
  «Can use 'a' and 'an' before adjectives in a noun phrase.» Об `the` молчит —
  подтверждено.
- **Оговорка, которой нет в разборе:** `1741163711539x336320676887564860`,
  NOUNS / noun phrases, **A1**, «FORM: DETERMINER + ADJECTIVE + NOUN» — «Can form
  simple noun phrases by pre-modifying singular and plural nouns with an
  adjective after a determiner.» Артикли источник сам кладёт в DETERMINERS,
  значит `the red car` под описание этой графы подпадает. Но её примеры —
  `my best friend`, `a big garden`, `Her favourite colours` — `the` не содержат
  ни одного, а графа, названная по `the` поимённо, стоит на A2. То есть
  **источник расходится сам с собой** — ровно как с `How are you?` в строке 1
  той же шапки. Эта графа A1 уже стоит у модуля в `egp` (уроки 3 и 4), поэтому
  назвать её в объявлении нужно: иначе следующий проверяющий увидит A2 и
  снимет оборот, не зная, что A1-графа модуля его покрывает описанием.
- Признак, которым графы разведены (правило «графа разведена своим
  признаком»): A1 `'A' + ADJECTIVES` против A2 `'THE' + ADJECTIVES, SPECIFYING` —
  различаются артиклем и словом `SPECIFYING`, то есть A2 меряет именно `the`,
  выделяющее вещь. Это вопрос модуля, графа о нём.

**Cambridge** (`materials/cambridge-young-learners-pre-a1-a2.pdf`):

- прогон `npm run pdf -- … --find "window is open"`: **одно совпадение, с. 21
  файла** (печатный номер страницы 18). Второй разбор
  (`materials/.md/cambridge-young-learners-pre-a1-a2.md`, строки 797–821):
  шапка страницы «Starters / Reading & Writing / Paper 2 / Part 2 — Look and
  read. Write yes or no.», строка образца в разделе Examples: «The big window is
  open.» — подтверждено. Это образец задания Pre A1 Starters, то есть оборот
  стоит на самой младшей ступени.
- Для полноты: перечень Grammar and Structures List Pre A1 Starters (с. 29)
  строкой `Adjectives` даёт «He's a small boy», `the` + прилагательное там
  примером не стоит. Опора Cambridge — образец задания, не перечень.

**По курсу:** `the` + прилагательное в видимом тексте модулей 1–8 нет ни разу
(`grep` по `courses/english-beginner-2/*.ts`; в `chisla-i-telefon.ts` два места,
оба в комментариях). Модуль 9 первый; в нём 11 мест, первое — урок 4, случай
`sluchay-the-tozhe-ostayotsya`: `The red car is new.`, `The big box is brown.`;
дальше урок 7 (`The big box is not my box.`). `grep` по `cvet-i-razmer.ts`
не находит ни `555362877047412000`, ни «window is open» — объявления нет,
разбор прав.

### Готовый текст

**В шапку файла**, в раздел «ЧЕТЫРЕ СТРОКИ, БЕЗ КОТОРЫХ СЛЕДУЮЩИЙ ПРОВЕРЯЮЩИЙ
СНИМЕТ ВЕРНОЕ», пятым пунктом (и **заголовок раздела поменять на «ПЯТЬ
СТРОК»** — иначе счётное слово солжёт):

```
 * 5. РАСХОЖДЕНИЕ ИСТОЧНИКОВ ПО `the` + ПРИЛАГАТЕЛЬНОЕ (`The red car is new.`,
 *    урок 4 и дальше). English Grammar Profile кладёт графу, названную по `the`,
 *    на A2 (`1741163708793x555362877047412000`, DETERMINERS / articles, FORM/USE:
 *    'THE' + ADJECTIVES, SPECIFYING), а Cambridge печатает оборот в образце
 *    Pre A1 Starters: Young Learners, с. 21, Reading and Writing Part 2 — «The big
 *    window is open.» Берём: по правилу владельца от 10 сентября 2026 решает
 *    источник, у которого оборот на ступени. Оговорка: English Grammar Profile
 *    расходится и сам с собой — графа A1 `1741163711539x336320676887564860`
 *    (DETERMINER + ADJECTIVE + NOUN, она в `egp` модуля) описанием покрывает и
 *    `the`, но примеров с `the` не даёт. Пункт A2 в `egp` НЕ СТОИТ.
```

**В `sources`** — новой записью, сразу после записи «Расхождение источников по
вопросу о цвете»:

```ts
    {
      ref:
        "Расхождение источников по the + прилагательное — Young Learners, с. 21, " +
        "Pre A1 Starters Reading and Writing Part 2; English Grammar Profile, DETERMINERS / articles",
      section:
        "Young Learners, с. 21 (печатный номер 18), строка образца задания Part 2: «The big " +
        "window is open.» — оборот на Pre A1 Starters. English Grammar Profile, " +
        "1741163708793x555362877047412000, A2, FORM/USE: 'THE' + ADJECTIVES, SPECIFYING: " +
        "«Can use 'the' + adjectives in a noun phrase, to specify.» Берём по правилу владельца " +
        "от 10 сентября 2026: решает источник, у которого оборот на ступени. Оговорка: графа " +
        "A1 1741163711539x336320676887564860 (NOUNS / noun phrases, DETERMINER + ADJECTIVE + " +
        "NOUN) — «Can form simple noun phrases by pre-modifying singular and plural nouns " +
        "with an adjective after a determiner» — описанием покрывает и the, но её примеры " +
        "the не содержат. Урок 4, случай sluchay-the-tozhe-ostayotsya, первым в курсе даёт " +
        "The red car is new.",
    },
```

Правка невидимая: ни звука, ни выкладки. После вставки прогнать
`npm run kontrol -- english-beginner-2 cvet-i-razmer` — обе цитаты должны
найтись (в CSV кавычки прямые `'the'`, как в тексте выше).

## 3. Программа ступени: опоры модулей 8 и 14


### 3.0. Страница CEFR с. 79 прочитана по КООРДИНАТАМ, а не разбором текста

Оба разбора (`materials/.md/`, `materials/.text/`) ставят метки ступени не на
свои строки. Рендер страницы недоступен (`pdftoppm` нет), поэтому прогон
`pdfplumber` по `materials/cefr-companion-2020.pdf`, страница файла 79: ячейки
столбца ступеней (x 71–110) и строки текста с их вертикальной координатой.
Ячейки: B2 134–204, B1 204–321, **A2 321–521, A1 521–646, Pre-A1 646–767**;
каждая метка стоит в середине своей ячейки (A1 на 580 при ячейке 521–646).

Графа **A1** Information exchange по координатам — шесть строк:
1. «Can understand questions and instructions addressed carefully and slowly to them and follow short, simple directions.» (526)
2. «Can ask and answer simple questions, initiate and respond to simple statements in areas of immediate need or on very familiar topics.» (552)
3. «Can ask and answer questions about themselves and other people, where they live, people they know, things they have.» (578)
4. «Can indicate time by lexicalised phrases like "next week", "last Friday", "in November", "3 o'clock".» (603)
5. «Can express numbers, quantities and cost in a limited way.» (619)
6. «Can name the colour of clothes or other familiar objects and can ask the colour of such objects.» (635)

Графа **Pre-A1** (646–767): имена, простые числа, день/время/дата, дата
рождения, телефон, возраст, «What is this?».

**Внимание, по дороге:** разбор `.md` ставит метку `A1` перед строкой 3 и
`Pre-A1` перед «phone number», то есть строки 1–2 он отдаёт A2, а «Can tell
people their name…», «simple numbers», «day, time of day and date», «date of
birth» — A1. По координатам строки 1–2 это A1, а четыре последние — Pre-A1.
Утверждения курса, стоящие на этих строках, стоит сверить (см. «Попутные
находки» в конце).

Скрипт чтения по координатам лежит во временной папке сессии; устроен так:
`pdfplumber`, прямоугольники левого столбца (x0 < 80, x1 < 130) — ячейки
ступеней, метка ступени внутри ячейки даёт её имя, каждая строка текста
относится к ячейке по своей координате `top`. Повторить можно за минуту.
Тем же способом прочитаны CEFR с. 63, 66, 67, 72, 83; Young Learners с. 9 —
левый столбец по координатам x < 300.

### 3.1. Модуль 8 «Один и много»

**Что модуль делает на деле** (`odin-i-mnogo.ts`, `outcomes`): убирает `a`/`an`
и ставит `are`, когда вещей несколько; пишет `-s`/`-es`/`-ies`; особые формы
людей; еда без `-s`; `these`; находит в списке, что есть и чего сколько;
записывает со слуха, сколько названо вещей. Дело — **сколько вещей: назвать и
понять**.

**Дескриптор в самом модуле уже есть** (`sources`, запись «Дескриптор дела —
CEFR Companion Volume 2020, с. 79, и Young Learners, с. 9»); модуль сам пишет,
что «EGP A1» дескриптором не является. Программа от модуля отстала. Перепроверено:

- **CEFR, с. 79, Information exchange, графа A1** (координаты: строка 619 в
  ячейке A1 521–646): «Can express numbers, quantities and cost in a limited
  way.» Подтверждено. Делится: numbers — модуль 4, quantities — модуль 8,
  cost — модуль 21.
- **Young Learners, с. 9, Can Do summary, Pre A1 Starters, LISTENING AND
  SPEAKING** (координаты: строки 314–337 и 424–435 левого столбца, под
  заголовком Pre A1 Starters на 113, выше A1 Movers на 495): «CAN understand
  some very simple spoken descriptions of everyday objects – such as how many,
  colour, size or location» и «CAN give very basic descriptions of some objects
  and animals – such as how many, colour, size or location». Подтверждено.
  Номер страницы файла и печатный совпадают.

**Готовая строка программы:**

    | 8 | Один и много | различать один предмет и несколько | множественное число | Food and Drink | CEFR с. 79, A1; Starters с. 9 |

### 3.2. Модуль 14 «Я не делаю»

**Что модуль делает на деле** (`ya-ne-delayu.ts`, `outcomes` и вступления
уроков): говорит о себе, чего не делает (урок 1); о других — `we`, `they`, `he`,
`she` (уроки 3–4); поправляет чужое неверное представление — сосед думает, что
Дана водитель (урок 5), «не чай, а кофе» (урок 6); читает сообщение Нурлана о
том, что он делает и чего нет (урок 7); слушает, кто чего не делает (урок 8);
пишет запись о себе (урок 9). **Дело — рассказать о себе и о другом человеке,
что он делает и чего не делает.**

**В самом модуле дескриптора дела нет:** `sources` держит графы English Grammar
Profile, списки Young Learners с. 29 и с. 52, A2 Key с. 29 и CEFR с. 83 для
уроков чтения и письма. В замысле `plan-modul-14.md` строк CEFR нет (`grep
"Can "` даёт только графы EGP). Дыра у программы и у модуля одна.

**Дескриптор найден.** Отрицание не называет ни одна графа — и не должна:
дескриптор описывает дело, а «что они делают» включает и «чего не делают».

1. **CEFR, с. 63, Sustained monologue: describing experience, графа A1**
   (координаты: ячейка A1, строка 254): «Can describe themselves, what they do
   and where they live.» Половину «what they do» уже берёт модуль 13
   (`kazhdyy-den.ts`, шапка, пункт 7), «where they live» — модуль 3. Модуль 14
   берёт «what they do» **отрицательной стороной**, и это надо сказать вслух,
   иначе следующий проверяющий сочтёт опору занятой.
2. **CEFR, с. 67, Creative writing, графа A1** (координаты: ячейка A1, строки
   685–695): «Can produce simple phrases and sentences about themselves and
   imaginary people, where they live and what they do.» Покрывает письменную
   половину и «о другом человеке» (уроки 3–4, 7).
3. **Young Learners, с. 9, Can Do summary, A1 Movers, LISTENING AND SPEAKING**
   (координаты: строки 620–631 левого столбца, под заголовком A1 Movers на 495):
   «CAN express agreement or disagreement with someone using short, simple
   phrases.» Опора ровно уроков 5 и 6 — поправить собеседника.

Уроки умений стоят на уже записанном: CEFR с. 83, Correspondence, A1 —
подтверждено координатами («Can compose a short, very simple message (e.g. a
text message) to friends to give them a piece of information…», строка 581).

**Готовая строка программы:**

    | 14 | Я не делаю | сказать, чего он не делает | отрицание с `do` | Time | CEFR с. 63, A1; с. 67, A1; Movers с. 9 |

**Готовый абзац поправки** (ставить после поправки к строкам 15–17):

    ## Поправка к строкам модулей 8 и 14 — 17 сентября 2026

    Опорой обеих строк стояло «EGP A1» — грамматический список, а не описание умения.

    **Модуль 8.** Дескриптор модуль нашёл сам и записал в `sources`; программа от
    него отстала. CEFR, с. 79, Information exchange, графа A1: «Can express numbers,
    quantities and cost in a limited way» (quantities — модуль 8; numbers — модуль 4,
    cost — модуль 21). Young Learners, с. 9, Pre A1 Starters: «CAN understand some
    very simple spoken descriptions of everyday objects – such as how many, colour,
    size or location».

    **Модуль 14.** Дескриптора дела не было ни в программе, ни в модуле. CEFR, с. 63,
    Sustained monologue: describing experience, графа A1: «Can describe themselves,
    what they do and where they live» — половину «what they do» модуль 13 берёт
    утвердительной стороной, модуль 14 отрицательной. CEFR, с. 67, Creative writing,
    графа A1: «Can produce simple phrases and sentences about themselves and imaginary
    people, where they live and what they do». Уроки 5 и 6 (поправить собеседника):
    Young Learners, с. 9, A1 Movers: «CAN express agreement or disagreement with
    someone using short, simple phrases».

    Страницы CEFR с. 63, 67 и 79 прочитаны по координатам ячеек, а не разбором
    текста: оба разбора ставят метки ступеней не на свои строки.

**И модулю 14 в `sources`** нужна та же запись:

    {
      ref: "Дескриптор дела — CEFR Companion Volume 2020, с. 63 и с. 67, графы A1; Young Learners, с. 9, A1 Movers",
      section:
        "CEFR, с. 63, Sustained monologue: describing experience, A1: «Can describe themselves, " +
        "what they do and where they live.» Половину «what they do» модуль 13 берёт утвердительной " +
        "стороной, модуль 14 — отрицательной. CEFR, с. 67, Creative writing, A1: «Can produce simple " +
        "phrases and sentences about themselves and imaginary people, where they live and what they " +
        "do.» Уроки 5 и 6 — Young Learners, с. 9, A1 Movers, Listening and Speaking: «CAN express " +
        "agreement or disagreement with someone using short, simple phrases.» Ступени по CEFR " +
        "прочитаны по координатам ячеек страницы: разборы текста метки сдвигают.",
    },

## Попутные находки (о чужом; вносит тот, кто решает)

1. **Модуль 17, ПРОВЕРИТЬ в программе о дескрипторе говорения.** Young
   Learners, с. 9, Pre A1 Starters, LISTENING AND SPEAKING (координаты, строки
   270–293): «CAN understand some very simple spoken descriptions of people –
   such as name, gender, age, mood, appearance or what they are doing». A1
   Movers (строки 685–697): «CAN give simple descriptions of objects, pictures
   and actions». Прежний поиск шёл только по CEFR. Передаю методисту модуля 17
   как след, не как решение.
2. **Модуль 10 `kakoy-chelovek.ts`, `sources`:** строка «Can describe
   themselves, what they do and where they live» названа разошедшейся между
   разборами. По координатам спор решён: графа A1 (с. 63, строка 254). Модуль
   её не берёт, вреда нет.
3. **Модуль 9 `cvet-i-razmer.ts`, `sources`:** о с. 67 «A1 открывает блок из
   двух строк» — по координатам строк A1 три (первая — «about themselves and
   imaginary people… what they do»); о с. 79 «строка про цвет пятая» — по
   координатам шестая. Ступень названа верно, неверен счёт.
4. **Разбор `.md` страницы CEFR с. 79 сдвигает метки:** «Can tell people their
   name…», «simple numbers», «day, time of day and date», «date of birth» он
   показывает под A1, по координатам это Pre-A1; две первые строки A1
   («understand questions and instructions…», «ask and answer simple
   questions…») он показывает над меткой A1. Опоры, выведенные из разбора этой
   страницы, стоит перечитать с этим признаком.

## Проверено и оказалось чистым — с признаком

- Урок 7 модуля 16: правка правила не задевает ни одно задание урока 7 и z1
  урока 9 (признак: прочитаны целиком); ключи `zvuchat` блока — целые строки,
  одиночного `sometimes` нет (признак: `sZvukom` в `Ekran.tsx`, с. 146, берёт
  ключи своего блока).
- `often` вводится раньше урока 7 — урок 2 `obychno-i-chasto` (признак: порядок
  `slug` в файле).
- Графы EGP A2 `…555362877047412000`, A1 `…344483096716751800` — дословно как в
  разборе (признак: `csv.DictReader` по `id`, все строки `SubCategory = articles`).
- Young Learners с. 21 «The big window is open.» — единственное совпадение в
  файле, Starters Reading and Writing Part 2, раздел Examples (признак:
  `npm run pdf --find` и `.md`, строки 797–821).
- `the` + прилагательное в видимом тексте модулей 1–8 — ноль (признак: `grep -E`
  по 25 прилагательным; два места в `chisla-i-telefon.ts` — комментарии).
- CEFR с. 79 A1 «quantities», с. 72 Pre-A1 «daily routines» (опора модуля 16 в
  программе), с. 83 A1 Correspondence — ступени верны (признак: координаты ячеек).

## Чего проверить не удалось

- Страницы глазами: `pdftoppm` нет, рендер недоступен. Заменено координатами
  `pdfplumber`; признак надёжный (каждая метка стоит в середине своей ячейки),
  но это не взгляд на страницу.
- `npm run kontrol` после вставки предложенных записей не прогонялся: код не мой.
