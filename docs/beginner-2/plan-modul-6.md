# Замысел модуля 6 «Моя семья и знакомые» — ступень Beginner (новый курс)

Методист, 6 сентября 2026. Курс `english-beginner-2`, часть 1, модуль последний
перед работой части «заполнить бланк гостиницы и рассказать о себе».

Строка принятой программы
(`docs/beginner-2/programma-stupeni.md`, раздел 8, часть 1):

| 6 | Моя семья и знакомые | рассказывать о родных: кто они и чем заняты | `and` при перечислении | Family and Friends + Work and Jobs | CEFR с. 79, 74 |

**Имя главной вещи модуля — «союз and».** Второе имя, которое модуль обязан
держать неизменным, — **«занятие»**: так модуль 2 уже зовёт `student`, `doctor`,
`driver` (`courses/english-beginner-2/kto-eto.ts`, случай `sluchay-4-zanyatie`:
«После am называем занятие»). Ни «профессия», ни «должность», ни
«специальность» в модуле 6 не появляются. Третье — **«родные»** (мать, отец,
брат, сестра).

---

## 0. ПЕРВОЕ, ЧТО СДЕЛАНО: поиск предмета в самом курсе

Правило проекта: предмет модуля ищут сперва в `courses/`, а уже потом в
`materials/`. Искал по обоим курсам — новому `english-beginner-2` и старому
`english-starter`.

### 0.1. Что нашлось в СТАРОМ курсе (склад)

| Где | Что там | Годится ли |
|---|---|---|
| `moi-veshchi.ts`, урок 6 «Родные и друзья» | таблица шести слов (family, mother, father, sister, brother, friend), врезка о звуке /ð/, врезка «friend — и друг, и подруга», шесть карточек | **берём как основу**, см. 7.1 |
| `moi-veshchi.ts`, урок 8 «Рассказ о своих вещах и семье» | рассказ `I have got a sister…`, таблица трёх оборотов | **не годится**: стоит на `have got`, а он в новой программе стоит в модуле 11 |
| `moi-veshchi.ts`, урок 9, текст `At home` | разговор про собаку и кошку на `have got` | **не годится**, та же причина |
| `rasskaz-o-sebe.ts`, урок 4 «Чем ты занимаешься» | занятия, карточки `student, doctor, driver, nurse, job` | **частично**: занятия уже отданы модулю 2 нового курса, остаются `nurse` и `job` |
| `sprosit-o-delah.ts` | карточки `job, office, company, university, college` | **берём слова**, не уроки |
| `i-no-potomu-chto.ts`, урок 2 «Перечисление: tea, coffee and water» | таблица «две / три / четыре вещи», задания на `and` перед последним | **берём устройство таблицы**, см. 7.3 — там же одна вещь, которую переносить НЕЛЬЗЯ |
| `pro-nego-i-pro-nih.ts` | `him`, `her`, `them` — дополнения | **не годится**: это пункты `PRONOUNS (OBJECT)`, программа их модулю 6 не даёт |
| `odin-i-mnogo.ts` | карточки `man, woman, child, people` | **берём слова** |

### 0.2. Что нашлось в НОВОМ курсе

Написаны два модуля: `alfavit` (модуль 1) и `kto-eto` (модуль 2, «Я, ты, он»).

**Модуль 2 уже взял шесть занятий карточками:** `student`, `teacher`, `doctor`,
`driver`, `artist`, `actor`, а также `work` («работа», пример `I am at work`).
Второй раз их брать нельзя — карточка засчитывается, если стоит в этом модуле
**или в любом более раннем** (программа, раздел 6.1).

**Модуль 1 уже взял `surname`** — а это запись темы `Family and Friends`
(словник A2 Key, с. 26). Тоже закрыто.

**Модуль 2 уже ввёл то, на чём модуль 6 стоит целиком** и что поэтому идёт в
`egpPovtor`, а не в `egp`:

- артикль `a` и `an` («Перед гласным звуком берём an»);
- занятие после `be`: `I am a doctor`;
- `at work`, `in a taxi` — предлог места;
- формы `am`, `are`, `is`.

**И одно наблюдение, которое надо передать сводящему** (это не мой модуль):
программа отдаёт «артикль» модулю 3, а модуль 2 его уже ввёл и разобрал выбор
`a` и `an`. Строка программы у модуля 3 разошлась с написанным содержанием.

**Слово `and` в новом курсе уже встречается** — модуль 2, разговор в начале
первого урока: «I am a student. **And you?**». Там оно стоит готовой формулой и
не разбирается. Модуль 6 разбирает его впервые, и ссылка «уже встречалось»
здесь ЗАКОННА: строка в курсе есть, я её проверил.

### 0.3. Чего в курсе НЕТ и что модуль 6 обязан дать сам

Ни в одном из двух написанных модулей нет ни одного слова о родных. Ни
`mother`, ни `family`, ни `friend`. Тема `Family and Friends` объявлена
программой у модуля 2, но модуль 2 её не закрывает: его карточки — местоимения,
занятия и состояния.

---

## 1. Дескриптор: ради чего модуль существует

Программа называет CEFR с. 79 и 74. **Обе опоры проверил постранично, обе
верны.**

**Главная — CEFR Companion 2020, с. 79, шкала *Information exchange*, графа A1:**

> «Can ask and answer questions about themselves and other people, where they
> live, **people they know**, things they have.»

**Вторая — с. 74, шкала *Conversation*, графа A1:**

> «Can take part in a simple conversation of a basic factual nature on a
> predictable topic (e.g. their home country, **family**, school).»

**Третья, которой в программе не было, а стоило бы — с. 63, шкала *Sustained
monologue: describing experience*, графа Pre-A1:**

> «Can describe themselves (e.g. name, age, **family**), using simple words/signs
> and formulaic expressions, provided they can prepare in advance.»

**Четвёртая, для урока говорения — руководство A2 Key, с. 42, Speaking Part 1,
Extended Response:**

> «Now A, please **tell me something about one of your friends**.»

(Та же строка стоит на с. 44. На с. 42 в разделе THE TASK сказано, из чего
задание состоит: «two short-answer questions… followed by one longer “Tell me
something about…” question».)

**Пятая, для перечня дел — руководство A2 Key, с. 51, Inventory of functions:**

> «asking for and giving personal details: (full) name, age, address, **names of
> relatives and friends**, etc.»

### 1.1. Граница, которую модуль ПЕРЕСЕКАТЬ НЕ ДОЛЖЕН

Я открыл ту же с. 63 и нашёл там же, графа **A2**:

> «Can **describe their family**, living conditions, educational background,
> present or most recent job.»

И на с. 79, графа **A2**:

> «Can ask and answer questions about **what they do at work** and in their free
> time.»

**Из этого следуют три ограничения на состав модуля, и все три — от источника, а
не от меня:**

1. **Связного рассказа о семье модуль не требует.** «Описать свою семью» — A2.
   На A1 законны короткие ответы на вопросы (с. 79) и подготовленный ряд
   отдельных предложений (с. 63, графа A1: «Can describe simple aspects of their
   everyday life in a series of simple sentences… provided they can prepare in
   advance»).
2. **«Чем заняты» — это НАЗВАТЬ занятие, а не рассказать о работе.**
   `My sister is a doctor` законно. `My sister works in a hospital every day and
   she likes her job` — это A2 («what they do at work»). Формулировку итога в
   программе читаем узко: назвать занятие словом.
3. **Личного письма о семье в модуле нет.** CEFR с. 55, *Reading
   correspondence*: «Can understand a simple personal letter, e-mail or post in
   which the person writing is talking about familiar subjects (**such as friends
   or family**)» стоит в графе **A2**. На A1 там открытка и короткое сообщение,
   а эти два жанра программа уже отдала модулю 28.

**И ограничение на длину текста для чтения** — CEFR с. 54, *Overall reading
comprehension*, графа A1: «Can understand **very short, simple texts a single
phrase at a time**, picking up familiar names, words and basic phrases and
rereading as required». Значит текст урока 6 — не рассказ, а несколько коротких
строк, каждая понятная сама по себе.

---

## 2. Состав: восемь уроков

Порядок программы (раздел 3): правила → чтение → слушание → говорение → письмо.

| № | Урок | Вид | Итог |
|---|---|---|---|
| 1 | Мама и папа: my mother and my father | правила | называть двоих родных в одной строке через and |
| 2 | Трое и больше: my mother, my father and my sister | правила | перечислять троих и больше: запятые между, and перед последним |
| 3 | Кто они: My sister is a doctor | правила | называть занятие родного: слово о родном, is и занятие с артиклем |
| 4 | Двое сразу: My father is a driver and my mother is a nurse | правила | соединять два готовых предложения о разных людях через and |
| 5 | Из двух слов и где работают: a taxi driver, at school | правила | называть занятие из двух слов и место работы: at school, in an office |
| 6 | Читаем запись о семье | чтение | находить в короткой записи, кто кому кем приходится и чем занят |
| 7 | Слушаем, кто чем занят | слушание | записывать одним словом занятие названного человека |
| 8 | Расскажи об одном из своих друзей | говорение | собирать три строки о знакомом: кто он, чем занят, где работает |

**Итог урока 8 назван по проверяемой половине.** Устную речь машина не
оценивает (программа, раздел 3), поэтому итог говорит «собирать три строки», а
не «рассказывать»: собранные строки проверяются заданием на сборку и вопросом
работы, произнесение — нет.

**Письма в модуле нет, и вот почему.** Программа (раздел 3): «письмо — только
где источник называет жанр». На A1 источник называет три жанра — открытку,
короткое сообщение и бланк (CEFR с. 83–84). Бланк отдан модулю 5, открытка и
сообщение — модулю 28. Четвёртого жанра A1 у источника нет: с. 68, шкала
*Reports and essays*, графы A1 и Pre-A1 — «No descriptors available». Личное
письмо о семье, как показано в 1.1, стоит на A2.

**Возвращение к пройденному** (программа обещает по одному со второго модуля):
в уроке 3 возвращаемся к модулю 2 — выбор `is` при одном человеке; в уроке 2 —
к модулю 4, счёт людей. Точные адреса заданий проставит сборщик полем `vozvrat`.

### 2.1. Работа модуля

12 вопросов, из них больше половины требуют произвести ответ, по вопросу на
каждый из восьми итогов, один по тексту урока 6, один со звуком. Ответ вопроса
со звуком — **одно слово** (A2 Key, с. 29, THE TASK: «The candidates should only
write ONE word, or a number, or a date, or a time for their answer»).

**Работу пишем ДО заданий уроков и с другого угла:** исправить чужую запись,
назвать пропущенное слово, отличить по смыслу. Вид действия у вопроса работы и
у задания урока должен РАЗЛИЧАТЬСЯ — замена имени близнеца не снимает.

---

## 3. Темы словника и слова

Обе темы — дословные имена из Приложения 2 словника A2 Key. Читал **второй
разбор**, `materials/.md/cambridge-vocab-a2-key.md`: тема `Family and Friends`
стоит на строке 1866 (с. 26 источника), `Work and Jobs` — на строке 2169
(с. 32).

    temy: ["Family and Friends", "Work and Jobs"]

### 3.1. Family and Friends — 28 записей с пометой Oxford A1

aunt, boy, brother, child, cousin, dad, daughter, family, father, friend,
friendly, girl, grandfather, grandmother, grandparent, group, husband, love,
married, mother, mum, neighbour, parent, sister, son, teenager, uncle, wife.

Записи темы, которых Oxford не знает (в знаменатель не входят, но
засчитываются, если карточка есть): grandchild, granddaughter, grandma,
grandpa, grandson, granny, penfriend, surname, Mr, Mrs, Ms. Записи A2: guest,
guy.

**Закрыто до модуля 6: одна** — `surname` (модуль 1).

### 3.2. Work and Jobs — 27 записей с пометой Oxford A1

actor, artist, break, business, company, computer, cook, customer, desk, doctor,
driver, email, farm, farmer, job, letter, meeting, message, nurse, office,
singer, student, teacher, waiter, work, worker, writer.

**Закрыто до модуля 6: восемь** — `letter` (модуль 1); `work`, `student`,
`teacher`, `doctor`, `driver`, `artist`, `actor` (модуль 2).

### 3.3. Что берёт модуль 6 — 35 карточек

**Родные, 23:** family, mother, father, parents, sister, brother, son, daughter,
child, grandmother, grandfather, grandparents, aunt, uncle, cousin, husband,
wife, friend, neighbour, boy, girl, dad, mum.

**Занятия и работа, 12:** job, nurse, cook, farmer, waiter, singer, writer,
worker, office, company, shop assistant, police officer.

После модуля 6: `Family and Friends` закрыта на 24 из 28 (86 процентов),
`Work and Jobs` — на 18 из 27 (67 процентов). Обе выше двух третей, которых
требует программа.

**Что оставлено другим модулям нарочно, а не забыто:** `computer`, `email`,
`message` — модулю 27 («В сети»); `meeting` — модулю 18 («Дни, время, дата,
встреча»); `desk`, `break`, `customer`, `business` — модулям 21 и 24; `farm` —
модулю 30 (тема `The Natural World`); `teenager`, `love`, `married`, `friendly`,
`group` — модулям 9 и 10, где разбираются прилагательные.

**Тридцать шестая карточка — вне обеих тем и потому в счёт нормы не идёт:**
`best friend` (урок 1). Она нужна пункту `MY BEST FRIEND` и разобрана в замысле
урока 1. Карточка вне объявленной темы законна всегда.

**Раскладка по урокам, чтобы счёт сходился:** урок 1 — family, mother, father,
dad, mum, sister, brother, friend (8) и best friend; урок 2 — parents,
grandmother, grandfather, grandparents, child, boy, girl (7); урок 3 — job,
nurse, cook, farmer, waiter, singer, writer (7); урок 4 — aunt, uncle, cousin,
neighbour, worker (5); урок 5 — husband, wife, son, daughter, office, company,
shop assistant, police officer (8).

**Каждая карточка обязана работать в модуле где-то ещё, кроме себя самой.**
Раскладка по урокам — в разделе 5 и в замысле урока 1.

### 3.4. Расхождение источников, о котором надо знать

Программа (раздел 6.1) меряет ступень словам по Oxford 3000. Второй источник
ступени — тематические списки Young Learners — по ряду слов даёт **выше**:

| Слово | Oxford 3000 | Young Learners |
|---|---|---|
| husband, wife, married, surname | A1 | **A2 Flyers** (с. 80) |
| job, office, singer, waiter, actor, artist | A1 | **A2 Flyers** (с. 84) |
| police officer | Oxford не знает | **A2 Flyers** (с. 84) |

Цитаты. Young Learners, **с. 80**, тематический список `Family & friends`,
столбец A2 Flyers: `husband, married, surname, wife`; столбец A1 Movers: `aunt,
daughter, granddaughter, grandparent, grandson, grown-up, parent, son, uncle`;
столбец Pre A1 Starters: `baby, boy, brother, child/children, classmate, cousin,
dad, family, father, friend, girl, grandfather, grandma, grandmother, grandpa,
kid, live, man/men, mother, mum, old, person/people, sister, woman/women, young`.

Там же **с. 84**, список `Work`, столбец Pre A1 Starters: `teacher`; A1 Movers:
`clown, cook, dentist, doctor, driver, farmer, film star, hospital, nurse,
pirate, pop star, work`; A2 Flyers: `actor, airport, ambulance, artist,
astronaut, business, businessman/woman, designer, engineer, factory, fire
engine, fire fighter, job, journalist, manager, mechanic, meeting, news,
newspaper, office, photographer, pilot, police officer, police station, queen,
rocket, singer, taxi, waiter`.

**Что с этим делать.** Мерка курса объявлена в программе, и это Oxford; менять
её из-за одного модуля нельзя, а модуль 2 уже взял `actor` и `artist` по той же
мерке. Поэтому беру — но `shop assistant` и `police officer` ставлю отдельной
строкой в раздел 8 как вопрос сводящему: у обоих части (`assistant`, `officer`)
Oxford даёт A2, а Young Learners даёт A2 Flyers всему сочетанию. Снять их можно
без ущерба: пункту `NOUN + NOUN` довольно `a taxi driver` и `a bus driver` —
оба собраны из слов, которые ученик уже получил или получает здесь (`taxi` —
модуль 1; `driver` — модуль 2; `bus` — Oxford A1 и словник A2 Key).

### 3.5. Чтение слов — беру решённое, а не источник

`materials/ipa-en-uk.txt` пишет `ɹ`, `ɡ`, `ɐ` и гласный в слоговом согласном —
всё это условности, которые курс уже отменил. Ниже записи, которые старые курсы
уже дают, то есть уже прошли владельца:

| Слово | Запись | Откуда |
|---|---|---|
| family | /ˈfæmɪli/ | `moi-veshchi.ts` |
| mother | /ˈmʌðə/ | `moi-veshchi.ts` |
| father | /ˈfɑːðə/ | `moi-veshchi.ts` |
| sister | /ˈsɪstə/ | `moi-veshchi.ts` |
| brother | /ˈbrʌðə/ | `moi-veshchi.ts` |
| friend | /frend/ | `moi-veshchi.ts` |
| parents | /ˈpeərənts/ | `english-elementary` |
| cousin | /ˈkʌzn/ | `english-elementary` |
| aunt | /ɑːnt/ | `english-elementary` |
| uncle | /ˈʌŋkl/ | `english-elementary` |
| husband | /ˈhʌzbənd/ | `english-elementary` |
| nurse | /nɜːs/ | `rasskaz-o-sebe.ts` |
| job | /dʒɒb/ | `rasskaz-o-sebe.ts` |
| office | /ˈɒfɪs/ | `sprosit-o-delah.ts` |
| company | /ˈkʌmpəni/ | `sprosit-o-delah.ts` |
| cook | /kʊk/ | `ya-ne-delayu.ts` |
| waiter | /ˈweɪtə/ | `english-elementary` |
| child | /tʃaɪld/ | `odin-i-mnogo.ts` |

Курсом не решены и требуют сверки владельцем: `son`, `daughter`, `grandmother`,
`grandfather`, `grandparents`, `wife`, `neighbour`, `boy`, `girl`, `dad`, `mum`,
`farmer`, `singer`, `writer`, `worker`. У `mother`, `job` и `singer` в
`ipa-en-uk.txt` записи нет вовсе — проверял через `npm run slovo`, ответ «нет
записи, спорное слово решает владелец»; для первых двух курс уже решил сам
(таблица выше), для `singer` решения нет.

---

## 4. Пункты English Grammar Profile

Читал `materials/English Grammar Profile Online.csv` настоящим разбором CSV:
1222 записи, из них уровня A1 — 109. **Перебрал все 109, а не одну
подкатегорию:** на этом в проекте обжигались дважды, и `and` разложен источником
по двум разделам сразу — `CONJUNCTIONS coordinating` и `CLAUSES coordinated`.

### 4.1. Что модуль вводит — `egp`

| `id` | Раздел | Guideword | Где в модуле |
|---|---|---|---|
| `1741163708775x971363187748411900` | CONJUNCTIONS / coordinating | FORM: WORD + WORD | урок 1 |
| `1741163708775x343585548868345200` | CONJUNCTIONS / coordinating | USE: LISTING | урок 2 |
| `1741163708775x236006169337418240` | CONJUNCTIONS / coordinating | FORM: PHRASE + PHRASE | урок 5 |
| `1741163708775x495770064260905300` | CONJUNCTIONS / coordinating | FORM: CLAUSE + CLAUSE | урок 4 |
| `1741163711539x458750897089793800` | NOUNS / noun phrases | FORM: NOUN + NOUN | урок 5 |
| `1741163711828x633639966955607000` | NOUNS / noun phrases — grammatical functions | FORM: AS SUBJECTS | урок 3 |
| `1741163706532x162687205151185180` | ADJECTIVES / superlatives | FORM: “MY BEST FRIEND” | урок 1 |

**Цитаты и примеры источника — их я читал вместе с описанием, а не вместо
него.**

- `WORD + WORD`: «Can use single word conjunctions (and, but, or) to connect
  single nouns and adjectives.» Пример: «On Monday and Wednesday I have English
  and maths.»
- `USE: LISTING`: «Can use and and or before the final item in a list.» Пример:
  «I go to college every Tuesday, Thursday and Friday morning.»
- `PHRASE + PHRASE`: «Can use single word conjunctions (and, but, or) to combine
  phrases.» Пример: «**I live with my mother and her boyfriend.**»
- `CLAUSE + CLAUSE`: «Can use single word conjunctions (and, but, or) to combine
  clauses.» Пример: «**He is a journalist and he likes everything about
  cinema.**» Первая половина примера — ровно строка этого модуля.
- `NOUN + NOUN`: «Can form noun phrases by pre-modifying a limited range of nouns
  with another noun.» Пример: «I am having a **dinner party** on Friday.»
- `AS SUBJECTS`: «Can use nouns and noun phrases as subjects of the clause.»
  Примеры: «His name is Stanislav.», «**My friends are from Poland, Hungary,
  Libya, and Morocco.**»
- `MY BEST FRIEND`: «Can use the irregular superlative adjective best in the
  phrase my best friend.» Примеры: «She is my best friend.», «Shahin is my best
  friend.»

**О последнем пункте отдельно.** Источник объявляет A1 не превосходную степень, а
одну фразу целиком. Значит и урок даёт её одной фразой — `my best friend`,
«мой лучший друг», — и НЕ говорит ни слова про степени сравнения. Это не долг
без адреса: правила, которое ученик должен ждать, здесь и не обещано.

### 4.2. К чему модуль возвращается — `egpPovtor`

| `id` | Guideword | Кто ввёл |
|---|---|---|
| `1741163715288x539616242661052000` | VERBS types, FORM: LINKING VERB “BE” | модуль 2 |
| `1741163712047x409239658002596100` | NOUNS, FORM: AS COMPLEMENT OF “BE” | модуль 2 (`I am a student`) |
| `1741163713868x463659211645272000` | PRONOUNS, FORM: (SUBJECT) STATEMENTS | модуль 2 |
| `1741163708789x105964971324936210` | DETERMINERS articles, FORM: WITH NOUNS | модуль 2 или 3, см. 8.2 |
| `1741163709005x427091401714639400` | DETERMINERS possessives, FORM: WITH NOUNS | модуль 5 |
| `1741163711821x759916598484829700` | NOUNS plural, FORM: PLURAL “-S” | модуль 4 (`My parents are teachers`) |
| `1741163708792x578027203654075000` | DETERMINERS articles, FORM: PREPOSITION + NO ARTICLE | модуль 2 (`I am at work`), модуль 6 добавляет `at school` |

### 4.3. Чего модуль НЕ берёт, хотя оно рядом — и почему

Все эти пункты про `and` тоже стоят на A1, и все они нужны модулям 27 и 28,
которым программа отдала «`and`, `but`, `or`» и «соединение предложений». Модуль
6 их не трогает, чтобы не вышло второго несовместимого разбора одной строки, как
на Elementary с `Why don’t we`:

- `1741163708775x324182637264445630` — FORM: SENTENCE + SENTENCE;
- `1741163708153x695756963015404300` — CLAUSES coordinated, MAIN CLAUSE + MAIN
  CLAUSE;
- `1741163708153x480316823264789900` — CLAUSES coordinated, ELLIPTED SUBJECT
  («I work and study» без второго `I`);
- `1741163708776x617714358104645400` — USE: “BUT”, CONCESSIVE;
- `1741163706316x926291459998112000` — ADJECTIVES combining, TWO ADJECTIVES WITH
  “AND” (модули 9 и 10, там прилагательные);
- `1741163711817x590984810392161200` — NOUNS types, COMPOUND NOUNS: пример
  источника — `swimming pool`, `bus stop`, `post office`, то есть места; их
  место в модулях 23 и 24.

**Граница между `CLAUSE + CLAUSE` (модуль 6) и `SENTENCE + SENTENCE` (модуль
28) названа так:** модуль 6 берёт только `and` и только внутри одной строки о
двух людях; `but`, `or` и соединение двух отдельных предложений остаются
модулям 27 и 28, и они объявляют пункт модуля 6 в своём `egpPovtor`.

---

## 5. Уроки 2–8 — по строке каждый

Подробный замысел урока 1 — отдельным документом,
`docs/beginner-2/plan-modul-6-urok-1.md`.

**Урок 2. «Трое и больше: my mother, my father and my sister».** Русская
параллель — «мама, папа и сестра»: запятые и одно «и» перед последним стоят
там же, где в английском. Случаи: двое — одно `and`; трое — запятая и `and`
перед последним; четверо — две запятые и одно `and`; слово `family` вместо
перечисления; `parents` вместо `my mother and my father`; `grandmother`,
`grandfather`, `grandparents`; счёт людей (возвращение к модулю 4). Карточки:
grandmother, grandfather, grandparents, parents, child, boy, girl. Пункт:
`USE: LISTING`. Итог: перечислять троих и больше — запятые между, `and` перед
последним.

**Урок 3. «Кто они: My sister is a doctor».** Русская параллель — «моя сестра
врач»: по-русски между «сестра» и «врач» пусто, по-английски там `is` и `a`.
Случаи: слово о родном вместо `he` и `she` перед `is`; занятие после `is` с
артиклем; `an` перед гласным звуком (`an artist`, `an actor` — повтор модуля 2);
`nurse`, `cook`, `farmer`, `waiter`, `singer`, `writer`; двое — `are` и занятие
во множественном (`My parents are teachers`, повтор модуля 4); `job` как слово о
работе вообще. Карточки: nurse, cook, farmer, waiter, singer, writer, job.
Пункт: `AS SUBJECTS`. Итог: называть занятие родного.

**Урок 4. «Двое сразу: My father is a driver and my mother is a nurse».**
Русская параллель — «папа водитель, а мама медсестра»: две готовые строки
соединяются одним словом. Случаи: два предложения об одном и том же человеке;
два предложения о разных людях; `and` в середине строки, а не в начале; запятая
перед `and` при двух половинах не нужна; порядок половин свободен, смысл тот же;
о трёх людях лучше три строки, чем одна длинная. Карточки: aunt, uncle, cousin,
neighbour, worker. Пункт: `CLAUSE + CLAUSE`. Итог: соединять два готовых
предложения о разных людях через `and`.

**Урок 5. «Из двух слов и где работают: a taxi driver, at school».** Русская
параллель — «водитель такси»: по-русски второе слово стоит после первого,
по-английски перед ним. Это и есть расхождение, ради которого урок написан.
Случаи: `a taxi driver`, `a bus driver`; `a shop assistant`, `a police officer`
(см. вопрос 8.1); место работы через `at` — `at school`, `at a company`,
`at a college`; место работы через `in` — `in an office`, `in a shop`,
`in a hospital`; `at school` без артикля, `in an office` с артиклем; два места
подряд через `and` (`at school and at home`) — это `PHRASE + PHRASE`. Карточки:
office, company, shop assistant, police officer, husband, wife, son, daughter.
Пункты: `NOUN + NOUN`, `PHRASE + PHRASE`. Итог: называть занятие из двух слов и
место работы.

**Решение владельца, действующее в этом уроке дословно:** предлог при учреждении
— `at` (`at school`, `at a university`, `at a college`, `at a company`);
помещение как место работы остаётся через `in` (`in a shop`, `in an office`,
`in a hospital`). Это решение владельца как преподавателя, а не выписка из
источника, и в текст урока оно идёт правилом, а не с оговоркой о нашей кухне.

**Урок 6. «Читаем запись о семье».** Вид текста — `message`, короткая запись в
сети. Опора: CEFR с. 55, графа A1, «Can understand short, simple messages sent
via social media or e-mail»; длина — по с. 54, графа A1, «very short, simple
texts a single phrase at a time». Значит запись в шесть-восемь коротких строк,
каждая понятна сама по себе, без придаточных. Задания: кто кому кем приходится,
кто чем занят, кто где работает. Итог: находить в короткой записи, кто кому кем
приходится и чем занят.

**Урок 7. «Слушаем, кто чем занят».** Запись — разговор на два голоса
(решение владельца от 19 августа: разговор звучит целиком и двумя голосами).
Ответ каждого вопроса — **одно слово**: `nurse`, `driver`, `office`, `two`.
Опора: A2 Key, с. 29, THE TASK. Итог: записывать одним словом занятие
названного человека.

**Урок 8. «Расскажи об одном из своих друзей».** Устроен по образцу A2 Key
Speaking Part 1 (с. 42): два коротких ответа и один длинный. Образец записан
голосом. Три строки: кто он — чем занят — где работает. Итог назван по
проверяемой половине: собирать три строки о знакомом.

**Осторожно с полом ученика во всех восьми уроках.** Обращение — «ты», а пола
платформа не знает. Прошедшего времени во втором лице в условиях и разборах
быть не должно, и ни одно задание не заставляет ученика назвать себя мужчиной
или женщиной. Рассказ о родных сам по себе безопасен — речь о других; опасны
только строки вида «напиши, кем ты работаешь». Таких в модуле нет.

---

## 6. Что берём со склада — старый курс и записи звука

### 6.1. Берём как есть

- **Врезка «friend — и друг, и подруга»** (`moi-veshchi.ts`, блок
  `friend-bez-roda`): «Friend — и “друг”, и “подруга”: слово о роде не говорит.
  Кто именно, показывает he или she рядом». Это настоящее расхождение с русским,
  и оно проверяется заданием.
- **Врезка о звуке /ð/ в mother, father, brother** (блок `th-v-rodnyh`) —
  с поправкой: ссылка в ней ведёт «в модуль про приветствие», а в НОВОМ курсе
  этот звук стоит в модуле 1 (`thank you`). Адрес ссылки редактор обязан
  перепроверить по новому курсу, а не перенести.
- **Решённые записи чтения** — таблица 3.5.

### 6.2. Переписываем

- **Таблица перечисления** (`i-no-potomu-chto.ts`, блок
  `tablica-perechisleniya`): устройство «две / три / четыре вещи» годится, но
  строки там про чай и кофе. В модуле 6 те же три строки — про родных.
- **Занятия из `rasskaz-o-sebe.ts`**: шесть занятий уже отданы модулю 2,
  остаются `nurse` и `job`. Остальные шесть занятий модуль 6 добирает новыми.

### 6.3. Не годится

- **Всё, что стоит на `have got`** (уроки 6, 8 и 9 модуля `moi-veshchi`): этот
  оборот в новой программе стоит в модуле 11, и до него ученик его не видел.
  Значит `I have got a sister` в модуле 6 быть не может ни в примере, ни в
  задании, ни в тексте для чтения.
- **Врезка «tea and coffee and water — так обычно не говорят»**
  (`i-no-potomu-chto.ts`, блок `ne-and-mezhdu-vsemi`). **Переносить её нельзя.**
  Графа источника — разрешение, а не запрет: `USE: LISTING` говорит, что `and`
  перед последним ставить МОЖНО, и не запрещает повторять `and`. Утверждение
  «так обычно не говорят» — это утверждение о частотности, а наши источники
  частотности не знают вовсе. Учить надо своему случаю: «между вещами запятые,
  перед последней and», без строки о том, как «не говорят».

### 6.4. Записи звука, которые уже лежат на складе

Имя файла считается из самой строки, поэтому дословно перенесённая английская
строка приходит со своей записью бесплатно. Проверил перебором по
`public/zvuk/`:

**Слова, запись есть:** family, mother, father, sister, brother, friend, nurse,
job, work, office, company, cook, husband, uncle, aunt, cousin, child, people,
man, woman, waiter, parents, student, teacher, doctor, driver, artist, actor.

**Слова, записи нет** (озвучить придётся): son, daughter, parent, wife,
grandmother, grandfather, grandparents, neighbour, boy, girl, dad, mum, farmer,
singer, writer, worker, shop assistant, police officer.

**Строки, запись есть:** `He is a doctor.`, `She is a nurse.`, `He is a driver.`,
`I am a student.`, `They are teachers.`, `This is my sister.`

**Строк, которых на складе нет и которые придётся озвучить:** `This is my
mother.`, `This is my father.`, `She is my friend.`, `He is my friend.`,
`My mother is a doctor.`, `My father is a driver.` и все строки с `and`.

Отсюда просьба к редактору: **где смысл позволяет, бери строку дословно из
списка «запись есть»** — это экономит озвучку и, что важнее, не плодит двух
записей одной и той же фразы.

---

## 7. Виды начала уроков — против однообразия

Программа требует (раздел 3): в каждой части встречаются не меньше трёх видов
начала. В модуле 6 начала такие:

| Урок | Вид начала |
|---|---|
| 1 | сцена: фотография в телефоне, человек называет каждого |
| 2 | русская фраза: «мама, папа и сестра» |
| 3 | русская фраза: «моя сестра врач» — и то, чего в ней нет по-английски |
| 4 | сцена: двое отвечают на один вопрос по очереди |
| 5 | русская фраза: «водитель такси» — слова стоят наоборот |
| 6 | текст: запись в сети |
| 7 | запись: разговор двух голосов |
| 8 | сцена: собеседник просит рассказать о друге |

Ни один урок не начинается обобщением («Рассказ о семье строится так…»).

---

## 8. Спорные строки — их свожу не я

### 8.1. Слова

**`shop assistant` и `police officer`.** Обе записи стоят в теме `Work and Jobs`
словника A2 Key (с. 32), но части (`assistant`, `officer`) Oxford даёт A2, а
Young Learners ставит `police officer` в столбец A2 Flyers (с. 84). Пункту
`NOUN + NOUN` они не необходимы: `a taxi driver` и `a bus driver` собраны из
слов ступени. Решение: брать или снять.

### 8.2. Пункты грамматики

**`1741163711828x633639966955607000` — NOUNS, FORM: AS SUBJECTS.** Прошу его
модулю 6: ученик впервые ставит перед `is` не местоимение, а слово о человеке
(`My sister is a doctor`). Но тот же пункт нужен модулю 5 («Бланк»,
притяжательные) — пример источника «His name is Stanislav» это ровно его строка.
Один `id` в `egp` у двух модулей проверка объявит вопросом. Развести можно так:
модуль 5 берёт `possessives`, модуль 6 — `AS SUBJECTS`.

**`1741163708789x105964971324936210` — DETERMINERS articles, FORM: WITH NOUNS.**
Программа отдаёт артикль модулю 3, а написанный модуль 2 его уже ввёл и разобрал
выбор `a`/`an`. Модуль 6 в любом случае ставит его в `egpPovtor`; кто ставит в
`egp` — вопрос между модулями 2 и 3.

**`1741163708792x578027203654075000` — PREPOSITION + NO ARTICLE.** Модуль 2 уже
даёт `I am at work` — это ровно тот пункт. Значит вводит его модуль 2, а модуль 6
берёт в `egpPovtor` и добавляет `at school`. Если сводящий решит иначе, пункт
уйдёт в `egp` модуля 6 — от этого состав урока 5 не меняется.

**`1741163711539x458750897089793800` — NOUN + NOUN.** Рядом лежит
`1741163711817x590984810392161200` (COMPOUND NOUNS), очень похожий. Прошу первый
модулю 6 (названия занятий), второй оставляю модулям 23–24 (`bus stop`, `post
office`). Если сводящий решит слить их в один модуль, слить надо оба сразу — два
разбора одной вещи в разных модулях и есть та беда, ради которой раздача
заведена.

### 8.3. Что решает владелец, а не я

Записи чтения пятнадцати слов из 3.5, которых курс ещё не решал.

---

## 9. Чего проверить не удалось

- **Полноты закрытия тем считал руками, а не проверкой.** `npm run programma --
  english-beginner-2` я не гонял: модуля 6 в курсе ещё нет, и счёт был бы по
  двум написанным модулям. Цифры 24 из 28 и 18 из 27 — мой счёт по спискам
  Приложения 2 и пометам Oxford; сверить их машиной надо после того, как модуль
  ляжет в код.
- **Пометы Oxford брал через `npm run slovo`,** то есть первую строку записи в
  `materials/.text/oxford-3000.txt`. Слов с двумя пометами (вроде `spring n. A1,
  v. B1`) среди моих не встретилось, но проверял я это не по всем 35, а
  выборочно.
- **Число 109 пунктов A1** сошлось с программой, сторож «1222 записи» тоже. А
  вот утверждение «модуль 2 не объявил ни одной темы и ни одного пункта» — это
  чтение файла `courses/english-beginner-2/kto-eto.ts`: полей `temy`, `egp` и
  `egpPovtor` в нём нет вовсе. Возможно, их проставит сборщик позже; я исходил из
  того, что есть сейчас.
- **Записи звука проверял вычислением имени файла** (FNV-1a из
  `lib/content/zvuk.ts`) и наличием файла на диске. Что ИМЕННО звучит в найденном
  файле, я не слушал: проверка «файл есть» не то же самое, что «звучит верно».
- **Страницу 26 и страницу 32 словника** читал по второму разбору
  (`materials/.md/`), а не по самому PDF: списки набраны четырьмя колонками, и
  первый разбор их склеивает. Номера страниц взяты из колонтитулов внутри того же
  разбора («Page 26 of 32», «Page 32 of 32»).
- **Утверждения «этого слова в новом курсе нет»** делал поиском `term: "…"` по
  `courses/english-beginner-2/*.ts`. Написано там два модуля из тридцати, и
  три замысла (модули 3, 4, 5) пишутся прямо сейчас — если они возьмут `family`
  или `friend`, мой счёт сдвинется.
- **Дескрипторов шкал 48–52 (слушание) постранично не открывал** — на урок 7
  опирался руководством A2 Key, с. 29, и общим правилом программы. Если урок
  слушания понадобится подпереть дескриптором CEFR, страницы надо открыть.

---

## 10. Приписано после того, как замысел был написан

**Решение владельца от 6 сентября 2026 о `This is …` и `Who is that?`**
(CLAUDE.md, раздел «`This is …` и `Who is that?` берём по Cambridge»): источники
расходятся — English Grammar Profile кладёт обороты на A2, Young Learners, с. 29,
даёт их в столбце Pre A1 Starters («This is an apple», «This is my car», «Who is
that man?»), — и владелец решил брать по Cambridge.

**На состав модуля 6 это не влияет, и вот почему.** Решение снимает вопрос о
СТУПЕНИ, а модуль 6 отказывался от `This is my mother` не по ступени, а по
ПОРЯДКУ: пункт `1741163708998x842376822392022500` программа отдала модулю 7,
и оба соседних замысла это подтверждают — модуль 3 пишет «`this` — модуль 7; в
модуле 3 не употребляется ни разу», модуль 2 отправляет `This is Daniyar.` туда
же. Модуль 6 стоит ПЕРЕД седьмым, значит оборот в нём стоять не может.

**Если сводящий перенесёт `this` в модуль 6 или раньше**, открывающий кусок
урока 1 и случаи 1–2 станут проще: `This is my mother` вместо `She is my
mother`. Переделка невелика, но делать её надо разом во всех пяти уроках правил.

**И ещё одно, сверенное после решения:** модуль 3 объявил в своём `egp` пункт
`1741163708789x105964971324936210` (артикль с существительными) и пункт
`1741163713112x806003192035927200` (простые предлоги, среди них `at`). Значит
раздел 8.2 закрывается сам собой: артикль вводит модуль 3, предлоги — тоже он, а
модуль 6 ставит оба в `egpPovtor`, как и записано в 4.2.
