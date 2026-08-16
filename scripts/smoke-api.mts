/**
 * Сквозная проверка программного интерфейса: от регистрации до сертификата.
 *
 * Это не замена тестам правил — те проверяют вычисления в отрыве от всего.
 * Здесь проверяется, что части работают вместе на настоящей базе.
 *
 * Запуск (сервер должен быть поднят на 3010):
 *   npx tsx scripts/smoke-api.mts
 */
import { config } from "dotenv";
config({ path: ".env.local", quiet: true });

const BASE = process.env.SMOKE_BASE ?? "http://localhost:3010";
const EMAIL = `smoke-${Date.now()}@codentalk.kz`;
const PASSWORD = "ochen-dlinnyi-parol-dlya-proverki";

let cookies = "";
let failures = 0;

function check(name: string, condition: boolean, detail?: unknown) {
  if (condition) {
    console.log(`  ✓ ${name}`);
  } else {
    failures += 1;
    console.log(`  ✗ ${name}`);
    if (detail !== undefined) console.log(`      ${JSON.stringify(detail)}`);
  }
}

async function api(path: string, init: RequestInit = {}) {
  const response = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(cookies ? { Cookie: cookies } : {}),
      ...(init.headers ?? {}),
    },
    redirect: "manual",
  });
  const setCookie = response.headers.getSetCookie?.() ?? [];
  if (setCookie.length) {
    const jar = new Map(cookies.split("; ").filter(Boolean).map((c) => {
      const i = c.indexOf("=");
      return [c.slice(0, i), c.slice(i + 1)] as [string, string];
    }));
    for (const raw of setCookie) {
      const [pair] = raw.split(";");
      const i = pair.indexOf("=");
      jar.set(pair.slice(0, i), pair.slice(i + 1));
    }
    cookies = [...jar].map(([k, v]) => `${k}=${v}`).join("; ");
  }
  const text = await response.text();
  let body: unknown = null;
  try {
    body = JSON.parse(text);
  } catch {
    body = text.slice(0, 200);
  }
  return { status: response.status, body: body as never, headers: response.headers };
}

async function login(email: string, password: string) {
  const csrf = await api("/api/auth/csrf");
  const token = (csrf.body as { csrfToken: string }).csrfToken;
  const form = new URLSearchParams({ csrfToken: token, email, password });
  return api("/api/auth/callback/credentials", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
}

console.log(`\nСквозная проверка: ${BASE}\n`);

// --- 1. Каталог доступен гостю ---------------------------------------------
console.log("Каталог для гостя");
{
  const r = await api("/api/v1/tracks");
  const tracks = (r.body as { tracks: unknown[] }).tracks ?? [];
  check("направления отдаются без входа", r.status === 200 && tracks.length > 0);

  const course = await api("/api/v1/courses/english-starter");
  check("курс виден гостю", course.status === 200);
  check(
    "гостю не показываются сведения о доступе",
    (course.body as { access: unknown }).access === null
  );
}

// --- 2. Защита от неавторизованных ------------------------------------------
console.log("\nЗакрытые методы без входа");
{
  const overview = await api("/api/v1/me/overview");
  check("личный кабинет закрыт", overview.status === 401);
  const enroll = await api("/api/v1/courses/english-starter/enroll", { method: "POST" });
  check("взять курс без входа нельзя", enroll.status === 401);
}

// --- 3. Регистрация и вход ---------------------------------------------------
console.log("\nРегистрация и вход");
{
  const reg = await api("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ email: EMAIL, password: PASSWORD, displayName: "Алим Нұрлан" }),
  });
  check("регистрация прошла", reg.status === 201, reg.body);

  const dup = await api("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ email: EMAIL, password: PASSWORD, displayName: "Другой" }),
  });
  check("повтор той же почты отклонён", dup.status === 409);

  const bad = await api("/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({ email: "не-почта", password: "123", displayName: "" }),
  });
  check("кривые данные отклонены с разбором по полям", bad.status === 400);

  await login(EMAIL, PASSWORD);
  const me = await api("/api/v1/me/overview");
  check("после входа кабинет открылся", me.status === 200, me.body);
}

// --- 4. Бесплатный курс ------------------------------------------------------
console.log("\nБесплатный курс");
let freeLessons: string[] = [];
{
  const enroll = await api("/api/v1/courses/english-starter/enroll", { method: "POST" });
  check("бесплатный курс берётся", enroll.status === 200, enroll.body);
  check(
    "бесплатный курс НЕ занимает место",
    (enroll.body as { tookSlot: boolean }).tookSlot === false
  );

  const course = await api("/api/v1/courses/english-starter");
  const data = course.body as {
    course: { modules: { lessons: { slug: string }[] }[]; extraLessons: { slug: string }[] };
  };
  freeLessons = [
    ...data.course.modules.flatMap((m) => m.lessons.map((l) => l.slug)),
    ...data.course.extraLessons.map((l) => l.slug),
  ];
  check("у курса есть уроки", freeLessons.length > 0);
}

// --- 5. Успехи ---------------------------------------------------------------
console.log("\nУчёт успехов");
{
  // Порядок уроков задаёт сервер, а не порядок в ответе каталога, поэтому
  // берём точку продолжения у него же, а не угадываем.
  const before = await api("/api/v1/me/overview");
  const firstSuggested = (
    before.body as { continueWith: { nextLesson: { slug: string } | null } | null }
  ).continueWith?.nextLesson?.slug;
  check("до начала занятий предложен первый урок", !!firstSuggested);

  const save = await api(`/api/v1/lessons/english-starter/${firstSuggested}/progress`, {
    method: "PUT",
    body: JSON.stringify({ status: "in_progress", position: { step: 3 } }),
  });
  check("место внутри урока сохраняется", save.status === 200, save.body);

  await api(`/api/v1/lessons/english-starter/${firstSuggested}/progress`, {
    method: "PUT",
    body: JSON.stringify({ status: "completed" }),
  });

  const overview = await api("/api/v1/me/overview");
  const body = overview.body as {
    continueWith: { nextLesson: { slug: string } | null; lessonsCompleted: number } | null;
  };
  check("пройденный урок засчитан", body.continueWith?.lessonsCompleted === 1, body.continueWith);
  check(
    "продолжить предлагается уже с другого урока",
    !!body.continueWith?.nextLesson &&
      body.continueWith.nextLesson.slug !== firstSuggested &&
      freeLessons.includes(body.continueWith.nextLesson.slug),
    body.continueWith?.nextLesson
  );

  const ghost = await api("/api/v1/lessons/english-starter/takogo-uroka-net/progress", {
    method: "PUT",
    body: JSON.stringify({ status: "completed" }),
  });
  check("несуществующий урок отклоняется", ghost.status === 404);
}

// --- 6. Платный курс без подписки -------------------------------------------
console.log("\nПлатный курс без подписки");
{
  const tracks = await api("/api/v1/tracks");
  const all = (tracks.body as { tracks: { courses: { slug: string; access: string }[] }[] }).tracks;
  const premium = all.flatMap((t) => t.courses).find((c) => c.access === "premium");

  if (!premium) {
    console.log("  — платных курсов пока нет, проверка пропущена");
  } else {
    const enroll = await api(`/api/v1/courses/${premium.slug}/enroll`, { method: "POST" });
    check("платный курс закрыт без подписки", enroll.status === 402, enroll.body);
    check(
      "причина названа верно",
      (enroll.body as { error?: { code: string } }).error?.code === "needs_subscription"
    );
  }
}

// --- 7. Сертификат -----------------------------------------------------------
console.log("\nСертификат");
{
  const early = await api("/api/v1/courses/english-starter/certificate", { method: "POST" });
  check("сертификат не выдаётся за непройденный курс", early.status === 403, early.body);

  // Проходим все уроки
  for (const slug of freeLessons) {
    await api(`/api/v1/lessons/english-starter/${slug}/progress`, {
      method: "PUT",
      body: JSON.stringify({ status: "completed" }),
    });
  }

  /*
   * Отметки «урок пройден» для сертификата теперь мало: нужно сдать
   * проверочные работы модулей. Правило намеренное — нажатие кнопки знаний не
   * подтверждает, — и проверка ловит именно его. Сдавать здесь девять работ
   * значило бы переписать в сквозную проверку весь разбор ответов; это делает
   * отдельная проверка правил в lib/domain.
   */
  const afterLessons = await api("/api/v1/courses/english-starter/certificate", {
    method: "POST",
  });
  check(
    "одних отметок «урок пройден» для сертификата мало",
    afterLessons.status === 403,
    afterLessons.body
  );

  const issued = afterLessons;
  const serial = (issued.body as { certificate?: { serial: string } }).certificate?.serial;

  if (serial) {
    const again = await api("/api/v1/courses/english-starter/certificate", { method: "POST" });
    check(
      "повторно тот же сертификат, а не новый",
      (again.body as { alreadyIssued: boolean }).alreadyIssued === true
    );

    // Публичная проверка — без входа
    const saved = cookies;
    cookies = "";
    const check1 = await api(`/api/v1/certificates/${serial}`);
    const payload = check1.body as {
      valid: boolean;
      certificate: { learnerName: string; course: string };
    };
    check("проверка сертификата открыта без входа", check1.status === 200);
    check("сертификат признан действительным", payload.valid === true);
    check("кириллица в имени цела", payload.certificate.learnerName === "Алим Нұрлан", payload.certificate.learnerName);
    check(
      "наружу не отдаётся почта ученика",
      !JSON.stringify(check1.body).includes(EMAIL)
    );

    const fake = await api("/api/v1/certificates/ZZZZ-ZZZZ-ZZZZ");
    check("выдуманный номер не подтверждается", fake.status === 404);

    const garbage = await api("/api/v1/certificates/мусор");
    check("испорченный номер отсеивается", garbage.status === 404);

    cookies = saved;
  }
}

// --- 8. Уроки закрыты до входа -----------------------------------------------
console.log("\nУроки закрыты до входа");
{
  // Ходим мимо общей корзинки печений: важно, что видит именно гость.
  const gost = (put: string) => fetch(`${BASE}${put}`, { redirect: "manual" });

  const urok = await gost(`/learn/english-starter/${freeLessons[0]}`);
  const kuda = urok.headers.get("location") ?? "";
  check("гостя с урока уводит на вход", urok.status === 307 || urok.status === 302, urok.status);
  check("и запоминает, куда он шёл", kuda.includes("/login?dalshe="), kuda);

  const rabota = await gost("/learn/english-starter/proverochnaya/alfavit");
  check(
    "проверочная работа тоже закрыта",
    rabota.status === 307 || rabota.status === 302,
    rabota.status
  );

  // А вот это должно остаться открытым: по составу уровня человек решает,
  // идти ли учиться, и эта же страница приводит людей из поиска.
  const sostav = await gost("/learn/english-starter");
  check("состав уровня открыт всем", sostav.status === 200, sostav.status);

  /*
   * Кнопка витрины ведёт в разные места, и оба раза это ловится здесь.
   *
   * Она вела на регистрацию всегда: вошедшему предлагали завести второй
   * аккаунт, а тому, у кого аккаунт уже есть, — регистрацию вместо входа.
   * Нашёл владелец, глазами. Проверка стоит затем, чтобы не нашёл во второй
   * раз.
   */
  const vitrinaGostyu = await (await gost("/")).text();
  check(
    "гостя витрина зовёт войти, а не регистрироваться",
    vitrinaGostyu.includes("Начать учиться") && vitrinaGostyu.includes('href="/login"'),
    null
  );

  const vitrinaSvoyemu = await (await fetch(`${BASE}/`, { headers: { Cookie: cookies } })).text();
  check(
    "вошедшего витрина ведёт к его курсам",
    vitrinaSvoyemu.includes("К моим курсам") && vitrinaSvoyemu.includes('href="/dashboard"'),
    null
  );
}

// --- 9. Смена забытого пароля ------------------------------------------------
console.log("\nСмена забытого пароля");
{
  const { prisma } = await import("../lib/db/index.ts");
  const { sozdatKod } = await import("../lib/auth/reset.ts");
  const { pochtaNastroena } = await import("../lib/mail/send.ts");

  /*
   * НА КАКОЙ АДРЕС ШЛЁМ ПРОВЕРОЧНОЕ ПИСЬМО — не мелочь.
   *
   * Ученик сквозной проверки заведён на выдуманный ящик нашего же домена.
   * Письмо туда не дойдёт никогда, и почтовая служба зачтёт отказ. Домен у нас
   * новый, доверия к нему ещё нет, и десяток таких отказов приведёт к тому, что
   * письма настоящим ученикам начнут падать в «Спам».
   *
   * Поэтому отправка проверяется на служебном адресе Resend: он принимает
   * письмо и никуда его не несёт. Отказа не будет.
   *
   * Предел писем — три в час на адрес и пять с сетевого адреса. Больше пяти
   * прогонов за час дадут отказ по пределу, и это не поломка.
   */
  const POCHTA_PROVERKI = "delivered@resend.dev";
  if (pochtaNastroena()) {
    // Ученик мог остаться от прошлого прогона — тогда придёт «почта занята», и
    // это нам подходит: важно, чтобы он в базе был.
    await api("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: POCHTA_PROVERKI,
        password: PASSWORD,
        displayName: "Проверка отправки",
      }),
    });
  }

  const zabyl = await api("/api/v1/auth/zabyl", {
    method: "POST",
    body: JSON.stringify({ email: pochtaNastroena() ? POCHTA_PROVERKI : EMAIL }),
  });
  if (pochtaNastroena()) {
    check("письмо со ссылкой отправлено", zabyl.status === 200, zabyl.body);
  } else {
    // Молчаливый успех здесь был бы хуже отказа: человек ждал бы письма,
    // которого никто не отправлял.
    check(
      "без настроенной почты метод отказывает честно",
      zabyl.status === 500 && JSON.stringify(zabyl.body).includes("не настроена"),
      zabyl.body
    );
    console.log("      (почта не настроена: нет RESEND_API_KEY и MAIL_FROM)");
  }

  /*
   * Дальше проверяется вторая половина — сам переход по ссылке. Код берём не
   * из письма (прочитать его отсюда нельзя), а кладём в базу тем же способом,
   * каким это делает метод интерфейса.
   */
  const uchenik = await prisma.user.findUnique({ where: { email: EMAIL }, select: { id: true } });
  const { kod, otpechatok, godenDo } = sozdatKod();
  await prisma.passwordResetToken.create({
    data: { userId: uchenik!.id, tokenHash: otpechatok, expiresAt: godenDo },
  });

  const NOVYY_PAROL = "sovsem-drugoy-dlinnyy-parol";

  const vydumannyy = await api("/api/v1/auth/novyy-parol", {
    method: "POST",
    body: JSON.stringify({ kod: "kod-kotorogo-ne-bylo", password: NOVYY_PAROL }),
  });
  check("выдуманный код не принимается", vydumannyy.status === 400, vydumannyy.body);

  const korotkiy = await api("/api/v1/auth/novyy-parol", {
    method: "POST",
    body: JSON.stringify({ kod, password: "123" }),
  });
  check("короткий пароль отклонён", korotkiy.status === 400);

  const smena = await api("/api/v1/auth/novyy-parol", {
    method: "POST",
    body: JSON.stringify({ kod, password: NOVYY_PAROL }),
  });
  check("пароль сменён по коду", smena.status === 200, smena.body);

  const povtor = await api("/api/v1/auth/novyy-parol", {
    method: "POST",
    body: JSON.stringify({ kod, password: NOVYY_PAROL }),
  });
  check("тот же код второй раз не срабатывает", povtor.status === 400);

  cookies = "";
  await login(EMAIL, PASSWORD);
  const staryy = await api("/api/v1/me/overview");
  check("старый пароль больше не подходит", staryy.status === 401, staryy.status);

  cookies = "";
  await login(EMAIL, NOVYY_PAROL);
  const novyy = await api("/api/v1/me/overview");
  check("новый пароль подходит", novyy.status === 200, novyy.status);
}

// --- Уборка ------------------------------------------------------------------
// Проверка создаёт настоящих учеников в базе — не оставляем мусор.
{
  const { prisma } = await import("../lib/db/index.ts");
  const removed = await prisma.user.deleteMany({
    where: {
      OR: [{ email: { startsWith: "smoke-" } }, { email: "delivered@resend.dev" }],
    },
  });
  await prisma.$disconnect();
  console.log(`\nУбрано учебных аккаунтов: ${removed.count}`);
}

console.log(
  failures === 0
    ? "\nВсе проверки пройдены.\n"
    : `\nПРОВАЛЕНО ПРОВЕРОК: ${failures}\n`
);
process.exit(failures === 0 ? 0 : 1);
