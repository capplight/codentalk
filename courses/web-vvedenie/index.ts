import type { Course } from "@/lib/content/types";
import tekstNaStranice from "./tekst-na-stranice";

const course: Course = {
  slug: "web-vvedenie",
  track: "web",
  title: "Введение в веб-разработку",
  access: "free",
  modules: [tekstNaStranice],
};

export default course;
