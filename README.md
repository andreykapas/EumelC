# Eumel

Немецкая карточная игра — консоль + веб. Учебный проект: vanilla JS, ES modules, Parcel.

## Документация

Правила и логика игры — **не в коде, а в `docs/`**:

| Файл | Что внутри |
|------|------------|
| [docs/USER_STORIES.md](./docs/USER_STORIES.md) | User stories — требования от лица игрока |
| [docs/FLOWCHART.md](./docs/FLOWCHART.md) | Flowchart (текст Mermaid) |
| [docs/flowchart.html](./docs/flowchart.html) | **Графические** схемы — открыть в браузере |

```bash
npm run docs    # flowchart в dev-сервере
```

## Быстрый старт

```bash
npm install
npm run dev       # веб: раздача карт
npm run console   # консоль: демо Card + Deck
npm run build     # сборка в dist/
npm run preview   # просмотр dist/
```

## Структура

```
src/
  Card.js      # карта, масти, beats()
  Deck.js      # колода, тасовка, раздача
  Player.js    # игрок, рука, ставки, очки
  main.js      # веб-точка входа
  console/     # консольные демо
docs/          # правила, user stories, flowchart
```

## Статус

- [x] Card, Deck, Player
- [x] Веб-раздача (Parcel)
- [x] User stories + flowchart
- [ ] Deck: частичная раздача (N карт, остаток в колоде)
- [ ] Game.js — полная логика раундов

## Автор

[andreykapas](https://github.com/andreykapas)
