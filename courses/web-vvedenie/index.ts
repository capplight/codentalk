import type { Course } from "@/lib/content/types";
import tekstNaStranice from "./tekst-na-stranice";
import ekzamen from "./ekzamen";

const course: Course = {
  slug: "web-vvedenie",
  track: "web",
  title: "Введение в веб-разработку",
  tagline: "Разметка страниц: с чего начинается любой сайт",
  access: "free",
  modules: [tekstNaStranice],
  exam: ekzamen,
};

export default course;
