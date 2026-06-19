# Evolution Digital Mindset

Статичный портал для GitHub Pages.

## Структура

```text
evolution-digital-mindset/
├─ index.html                    # Главная
├─ ai/
│  ├─ index.html                  # Раздел ИИ
│  ├─ trainer.html                # Тренажёр промтов
│  └─ tools.html                  # Витрина AI-инструментов
├─ ba/index.html                  # Бизнес-анализ
├─ practices/index.html           # Графики практик
├─ results/index.html             # Банк решений и истории успеха
├─ community/index.html           # Сообщество
├─ library/index.html             # Библиотека обучения
└─ assets/
   ├─ css/style.css
   ├─ js/app.js
   └─ img/
```

## Как выложить на GitHub Pages

1. Создай репозиторий, например `evolution-digital-mindset`.
2. Загрузи в него все файлы из этой папки. В корне репозитория обязательно должен лежать `index.html`.
3. Открой репозиторий → `Settings` → `Pages`.
4. В блоке `Build and deployment` выбери:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Нажми `Save`.
6. Через 1–3 минуты сайт будет доступен по адресу:

```text
https://ТВОЙ_ЛОГИН.github.io/evolution-digital-mindset/
```

## Важно

- Это статичный сайт: HTML/CSS/JS.
- API-ключи от нейросетей в HTML вставлять нельзя.
- Для AI-модуля с API нужен отдельный backend/proxy.
