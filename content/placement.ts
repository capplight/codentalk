/**
 * Тест на определение уровня.
 * Вопросы идут по возрастающей сложности и сгруппированы по уровням.
 * Уровень считается «взятым», если верно 60%+ его вопросов; рекомендуется
 * первый уровень, который взять не удалось (см. lib/placement.ts).
 */

export type PlacementBand = "starter" | "a1" | "a2" | "b1" | "b2";

export interface PlacementQuestion {
  band: PlacementBand;
  /** Предложение с пропуском: часть до и после поля выбора */
  before: string;
  after: string;
  options: string[];
  answer: string;
  /** Что проверяем — показывается в разборе */
  topic: string;
}

export const placementQuestions: PlacementQuestion[] = [
  // ---------- Starter ----------
  {
    band: "starter",
    before: "Hello! My name",
    after: "Alim.",
    options: ["are", "is", "am"],
    answer: "is",
    topic: "глагол to be",
  },
  {
    band: "starter",
    before: "I",
    after: "a brother and two sisters.",
    options: ["has", "am", "have"],
    answer: "have",
    topic: "глагол have",
  },
  {
    band: "starter",
    before: "This is",
    after: "apple.",
    options: ["an", "a", "the"],
    answer: "an",
    topic: "артикли a / an",
  },
  {
    band: "starter",
    before: "How old",
    after: "you?",
    options: ["is", "do", "are"],
    answer: "are",
    topic: "вопрос с to be",
  },

  // ---------- A1 ----------
  {
    band: "a1",
    before: "She",
    after: "coffee every morning.",
    options: ["drink", "drinks", "drinking"],
    answer: "drinks",
    topic: "Present Simple, -s в третьем лице",
  },
  {
    band: "a1",
    before: "",
    after: "you speak English?",
    options: ["Do", "Are", "Does"],
    answer: "Do",
    topic: "вопрос с do / does",
  },
  {
    band: "a1",
    before: "Look! It",
    after: "raining.",
    options: ["does", "has", "is"],
    answer: "is",
    topic: "Present Continuous",
  },
  {
    band: "a1",
    before: "There",
    after: "two windows in the room.",
    options: ["is", "are", "have"],
    answer: "are",
    topic: "there is / there are",
  },

  // ---------- A2 ----------
  {
    band: "a2",
    before: "Yesterday we",
    after: "to the cinema.",
    options: ["went", "go", "have gone"],
    answer: "went",
    topic: "Past Simple, неправильные глаголы",
  },
  {
    band: "a2",
    before: "",
    after: "you see this film last week?",
    options: ["Have", "Do", "Did"],
    answer: "Did",
    topic: "вопрос о прошлом с did",
  },
  {
    band: "a2",
    before: "This room is",
    after: "than the first one.",
    options: ["big", "bigger", "the biggest"],
    answer: "bigger",
    topic: "сравнительная степень",
  },
  {
    band: "a2",
    before: "You look ill. You",
    after: "see a doctor.",
    options: ["should", "must not", "would"],
    answer: "should",
    topic: "советы через should",
  },

  // ---------- B1 ----------
  {
    band: "b1",
    before: "I have worked here",
    after: "three years.",
    options: ["since", "for", "during"],
    answer: "for",
    topic: "for / since в Present Perfect",
  },
  {
    band: "b1",
    before: "Have you",
    after: "been to Scotland?",
    options: ["yet", "already", "ever"],
    answer: "ever",
    topic: "спутники Present Perfect",
  },
  {
    band: "b1",
    before: "If it rains tomorrow, we",
    after: "stay at home.",
    options: ["will", "would", "are"],
    answer: "will",
    topic: "первое условное",
  },
  {
    band: "b1",
    before: "I enjoy",
    after: "new languages.",
    options: ["to learn", "learning", "learn"],
    answer: "learning",
    topic: "глагольные связки (enjoy + -ing)",
  },

  // ---------- B2 ----------
  {
    band: "b2",
    before: "This castle",
    after: "built 900 years ago.",
    options: ["is", "has", "was"],
    answer: "was",
    topic: "страдательный залог",
  },
  {
    band: "b2",
    before: "When we arrived, the film",
    after: "already started.",
    options: ["had", "has", "was"],
    answer: "had",
    topic: "Past Perfect",
  },
  {
    band: "b2",
    before: "Tom said he",
    after: "tired after the flight.",
    options: ["is", "was", "has been"],
    answer: "was",
    topic: "косвенная речь",
  },
  {
    band: "b2",
    before: "You like tea,",
    after: "?",
    options: ["do you", "aren't you", "don't you"],
    answer: "don't you",
    topic: "хвостовые вопросы",
  },
];
