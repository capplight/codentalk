import type { RulesSet } from "@/lib/types";

const rules: RulesSet = {
  intro:
    "Уровень A2: время говорить о прошлом и о планах на будущее, сравнивать предметы и давать советы. Здесь всё Past Simple (правильные и неправильные глаголы, did), будущее going to и will, степени сравнения, should и must.",
  groups: [
    {
      heading: "Прошедшее время (Past Simple)",
      blocks: [
        {
          id: "was-were",
          title: "was / were — «был / были»",
          summary: "Прошлое от to be: I/he/she/it was, you/we/they were.",
          body: [
            "was и were — это to be в прошедшем времени. Отрицание: wasn't / weren't. Вопрос: Was it…? / Were you…?",
          ],
          table: {
            head: ["Местоимение", "Форма"],
            rows: [
              ["I / he / she / it", "was"],
              ["you / we / they", "were"],
            ],
          },
          examples: [
            { en: "The trip was amazing.", ru: "Поездка была потрясающей." },
            { en: "We were at the airport.", ru: "Мы были в аэропорту." },
            { en: "Were you tired?", ru: "Ты был уставшим?" },
          ],
        },
        {
          id: "past-regular",
          title: "Правильные глаголы: + ed",
          summary: "Прошлое обычного глагола = глагол + ed: work → worked, play → played.",
          body: [
            "Большинство глаголов в прошедшем времени получают окончание -ed. Форма одинакова для всех лиц: I worked, he worked, they worked.",
            "Правописание: если глагол кончается на -e, добавляем только -d (like → liked). Согласная + y → -ied (study → studied). Короткое слово «гласная+согласная» удваивает согласную (stop → stopped).",
          ],
          table: {
            head: ["Глагол", "Прошлое", "Правило"],
            rows: [
              ["work", "worked", "+ ed"],
              ["like", "liked", "+ d (уже есть e)"],
              ["study", "studied", "y → ied"],
              ["stop", "stopped", "удвоение согласной"],
            ],
          },
          examples: [
            { en: "I missed this city.", ru: "Я скучал по этому городу." },
            { en: "She studied all night.", ru: "Она училась всю ночь." },
          ],
        },
        {
          id: "past-irregular",
          title: "Неправильные глаголы",
          summary: "Частые глаголы меняются по-своему: go → went, have → had, see → saw. Их надо запомнить.",
          body: [
            "Самые употребительные глаголы не подчиняются правилу -ed — у них особая форма прошедшего времени, которую нужно выучить наизусть.",
            "Вот основные, которые встретятся чаще всего:",
          ],
          table: {
            head: ["Глагол", "Прошлое", "Перевод"],
            rows: [
              ["go", "went", "идти → пошёл"],
              ["have", "had", "иметь → имел"],
              ["see", "saw", "видеть → увидел"],
              ["do", "did", "делать → сделал"],
              ["get", "got", "получать → получил"],
              ["make", "made", "делать → сделал"],
              ["take", "took", "брать → взял"],
              ["come", "came", "приходить → пришёл"],
              ["find", "found", "находить → нашёл"],
              ["buy", "bought", "покупать → купил"],
            ],
          },
          examples: [
            { en: "I went to the mountains.", ru: "Я ездил в горы." },
            { en: "We had a great time.", ru: "Мы отлично провели время." },
          ],
        },
        {
          id: "past-did",
          title: "Вопросы и отрицания: did",
          summary: "Вопрос: Did you…? Отрицание: didn't. Глагол — в базовой форме!",
          body: [
            "В прошедшем времени вопросы и отрицания строятся с помощником did (для всех лиц). Важнейшее: после did глагол возвращается в БАЗОВУЮ форму — прошедшее уже «спрятано» в did.",
            "didn't = did not.",
          ],
          examples: [
            { en: "Did you like the film?", ru: "Тебе понравился фильм?" },
            { en: "I didn't see him.", ru: "Я его не видел." },
            { en: "What did you do yesterday?", ru: "Что ты делал вчера?" },
          ],
          mistakes: [
            { wrong: "Did you went?", right: "Did you go?", note: "После did — базовая форма (go), а не went." },
          ],
        },
      ],
    },
    {
      heading: "Будущее время",
      blocks: [
        {
          id: "going-to",
          title: "going to — планы",
          summary: "Заранее задуманный план: am/is/are going to + глагол. I am going to travel.",
          body: [
            "going to описывает план или намерение, о котором ты решил ЗАРАНЕЕ, ещё до разговора.",
          ],
          examples: [
            { en: "I am going to learn Python.", ru: "Я собираюсь учить Python." },
            { en: "We are going to visit London.", ru: "Мы собираемся посетить Лондон." },
          ],
        },
        {
          id: "will",
          title: "will — решения, обещания, предсказания",
          summary: "will + глагол: решение в момент речи, обещание или прогноз. I will help you.",
          body: [
            "will используют, когда решение принято ПРЯМО СЕЙЧАС, в момент разговора, а также для обещаний и предсказаний. После will глагол без to и без -s.",
            "Сокращения: I'll, he'll; отрицание — won't.",
          ],
          examples: [
            { en: "I will call you tonight.", ru: "Я позвоню тебе вечером." },
            { en: "It will rain tomorrow.", ru: "Завтра пойдёт дождь." },
          ],
          mistakes: [
            { wrong: "I will to help.", right: "I will help.", note: "После will — глагол без to." },
          ],
        },
        {
          id: "going-to-vs-will",
          title: "going to или will?",
          summary: "going to — план заранее. will — решил в момент разговора / обещание / прогноз.",
          body: [
            "Сравни: I'm going to visit Rome (план был раньше) и Ok, I'll visit Rome! (решил только что). Оба о будущем, но разница — когда возникло решение.",
          ],
          examples: [
            { en: "— We need milk. — Ok, I'll buy it.", ru: "— Нужно молоко. — Хорошо, я куплю (решение сейчас → will)." },
            { en: "I'm going to buy a car next year.", ru: "Я собираюсь купить машину в следующем году (план → going to)." },
          ],
        },
      ],
    },
    {
      heading: "Сравнение и советы",
      blocks: [
        {
          id: "comparative",
          title: "Сравнительная степень (…-ее)",
          summary: "Короткое слово + er + than; длинное — more + слово + than.",
          body: [
            "Чтобы сравнить два предмета, к короткому прилагательному добавляют -er и than: cheaper than, bigger than. К длинному (2+ слога) ставят more … than: more expensive than.",
            "Правописание: big → bigger (удвоение), easy → easier (y → ier).",
          ],
          table: {
            head: ["Прилагательное", "Сравнение"],
            rows: [
              ["cheap", "cheaper than"],
              ["big", "bigger than"],
              ["easy", "easier than"],
              ["expensive", "more expensive than"],
              ["good", "better than (исключение)"],
              ["bad", "worse than (исключение)"],
            ],
          },
          examples: [
            { en: "This room is bigger than the first one.", ru: "Эта комната больше первой." },
            { en: "Tea is cheaper than coffee here.", ru: "Чай здесь дешевле кофе." },
          ],
        },
        {
          id: "superlative",
          title: "Превосходная степень (самый…)",
          summary: "Короткое: the + слово + est. Длинное: the most + слово.",
          body: [
            "Для «самый» короткие слова получают the …-est (the biggest, the cheapest), длинные — the most … (the most expensive).",
            "Особые формы: good → the best, bad → the worst.",
          ],
          table: {
            head: ["Прилагательное", "Сравнение", "Превосходная"],
            rows: [
              ["big", "bigger", "the biggest"],
              ["good", "better", "the best"],
              ["bad", "worse", "the worst"],
              ["expensive", "more expensive", "the most expensive"],
            ],
          },
          examples: [
            { en: "It is the best café in town.", ru: "Это лучшее кафе в городе." },
            { en: "This is the most beautiful view.", ru: "Это самый красивый вид." },
          ],
        },
        {
          id: "should",
          title: "should — советы",
          summary: "should + глагол — «стоит, следует». shouldn't — «не стоит».",
          body: [
            "should даёт мягкий совет: You should rest — тебе стоит отдохнуть. После should глагол без to.",
            "Отрицание shouldn't советует чего-то не делать: You shouldn't smoke.",
          ],
          examples: [
            { en: "You should see a doctor.", ru: "Тебе стоит сходить к врачу." },
            { en: "You shouldn't worry.", ru: "Тебе не стоит волноваться." },
          ],
        },
        {
          id: "have-to-must",
          title: "must / have to — обязанность",
          summary: "must и have to — «должен, надо». mustn't — строгий запрет.",
          body: [
            "must и have to выражают необходимость: I must go / I have to go — мне надо идти. В разговорной речи чаще have to.",
            "Осторожно: mustn't — это запрет («нельзя»), а don't have to — «не обязан» (можно и не делать). Это разные вещи!",
          ],
          examples: [
            { en: "I have to work tomorrow.", ru: "Мне надо работать завтра." },
            { en: "You mustn't smoke here.", ru: "Здесь нельзя курить." },
            { en: "You don't have to come.", ru: "Тебе не обязательно приходить." },
          ],
        },
      ],
    },
  ],
};

export default rules;
