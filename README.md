# Evolution Digital Mindset

Статичный портал для GitHub Pages: главная, раздел ИИ, раздел БА, практики, результаты, сообщество и библиотека.

## Что есть в этой версии

- Новая главная с анонсами разделов.
- Наполненный раздел ИИ: гайд, промты, ассистенты, кейсы, безопасность, тренажёр и витрина.
- Наполненный раздел БА с инфографикой и объяснениями для новичков.
- Переключатель темы Ocean / Light.
- Сохранение выбранной темы в браузере через `localStorage`.

## Структура

```text
index.html
ai/
  index.html
  guide.html
  prompts.html
  assistants.html
  usecases.html
  safety.html
  trainer.html
  tools.html
ba/
  index.html
practices/
  index.html
results/
  index.html
community/
  index.html
library/
  index.html
assets/
  css/style.css
  js/app.js
```

## Как выложить на GitHub Pages

1. Распакуй архив.
2. Открой распакованную папку.
3. Выдели всё содержимое: `index.html`, папки `ai`, `ba`, `assets` и остальные.
4. Загрузи это в корень репозитория через `Add file → Upload files`.
5. Нажми `Commit changes`.
6. В `Settings → Pages` должно быть: `Deploy from a branch`, ветка `main`, папка `/root`.
7. Через 1–3 минуты сайт будет доступен по адресу:

```text
https://daniodl.github.io/evolution-digital-mindset/
```

## Важно

В корне репозитория обязательно должен лежать `index.html`. Не загружай папку внутрь папки.
