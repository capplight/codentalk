#!/usr/bin/env bash
#
# Скачивание учебных источников в папку materials/.
#
# Папка в репозиторий не попадает — файлы тяжёлые. Этот скрипт нужен, чтобы на
# другой машине не искать ссылки заново.
#
# Важно: сайты Совета Европы и Cambridge отказывают программам, которые не
# представляются браузером. Отсюда заголовок User-Agent — без него приходит 403.
#
# Запуск:  bash scripts/download-sources.sh

set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p materials
cd materials || exit 1

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

get() {
  local name="$1" url="$2"
  if [ -f "$name" ]; then
    printf "%-44s уже есть\n" "$name"
    return
  fi
  printf "%-44s " "$name"
  local code
  code=$(curl -sL -A "$UA" --max-time 180 -o "$name" -w "%{http_code}" "$url")
  local size
  size=$(stat -c%s "$name" 2>/dev/null || echo 0)
  # Проверяем не только код ответа: сервер может отдать 200 со страницей ошибки
  if [ "$code" = "200" ] && [ "$size" -gt 20000 ] && head -c4 "$name" | grep -q "%PDF"; then
    echo "готово, $((size / 1024)) кБ"
  else
    echo "НЕ УДАЛОСЬ (код $code)"
    rm -f "$name"
  fi
}

echo "— Описания ступеней, Совет Европы —"
get "cefr-companion-2020.pdf" \
  "https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4"
get "cefr-self-assessment-grid.pdf" \
  "https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=090000168045bb52"

echo "— Руководства по экзаменам, Cambridge —"
get "cambridge-young-learners-pre-a1-a2.pdf" "https://www.cambridgeenglish.org/Images/153612-yle-handbook-for-teachers.pdf"
get "cambridge-a2-key-handbook.pdf"          "https://www.cambridgeenglish.org/images/504505-a2-key-handbook-2020.pdf"
get "cambridge-a2-key-schools.pdf"           "https://www.cambridgeenglish.org/images/504506-a2-key-for-schools-handbook-2020.pdf"
get "cambridge-b1-preliminary-handbook.pdf"  "https://www.cambridgeenglish.org/Images/168150-b1-preliminary-teachers-handbook.pdf"
get "cambridge-b1-preliminary-schools.pdf"   "https://www.cambridgeenglish.org/Images/168143-cambridge-english-preliminary-for-schools-teachers-handbook.pdf"
get "cambridge-b2-first-handbook.pdf"        "https://www.cambridgeenglish.org/images/167791-b2-first-handbook.pdf"
get "cambridge-b2-first-schools.pdf"         "https://www.cambridgeenglish.org/Images/167792-b2-first-for-schools-handbook.pdf"
get "cambridge-c1-advanced-handbook.pdf"     "https://www.cambridgeenglish.org/images/167804-c1-advanced-handbook.pdf"
get "cambridge-c2-proficiency-handbook.pdf"  "https://www.cambridgeenglish.org/Images/168194-c2-proficiency-teachers-handbook.pdf"

echo ""
echo "Готово. Что не скачалось автоматически — см. materials/README.md"
