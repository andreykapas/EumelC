# Eumel

A trick-taking card game from German university and military circles — console + web.  
Learning project: vanilla JavaScript, ES modules, Parcel.

**Rules in brief:** 4–6 players, 52 cards, suit hierarchy ♠ > ♣ > ♦ > ♥, bid on tricks, lowest score wears the _Eumel_ sign.

---

## Documentation

Game rules and flow live in **`docs/`** (detailed specs, partly in Russian):

| File                                           | Contents                                     |
| ---------------------------------------------- | -------------------------------------------- |
| [docs/USER_STORIES.md](./docs/USER_STORIES.md) | User stories                                 |
| [docs/FLOWCHART.md](./docs/FLOWCHART.md)       | Flowcharts (Mermaid source)                  |
| [docs/flowchart.html](./docs/flowchart.html)   | **Interactive** flowcharts — open in browser |

```bash
npm run docs    # flowcharts on dev server
```

---

## Quick start

```bash
npm install
npm run dev       # web: deal cards in browser
npm run console   # terminal: Card + Deck demo
npm run build     # production build → dist/
npm run preview   # serve dist/
```

## Project structure

```
src/
  Card.js      # card, suits, beats()
  Deck.js      # deck, shuffle, deal
  Player.js    # hand, bids, scoring
  main.js      # web entry point
  console/     # terminal demos
docs/          # rules, user stories, flowcharts
```

## Status

- [x] Card, Deck, Player
- [x] Web deal (Parcel)
- [x] User stories + flowcharts
- [x] Deck: partial deal (N cards, remainder stays in deck)
- [ ] Game.js — full round logic

## Author

[andreykapas](https://github.com/andreykapas)

---

## По-русски

Pet-project под менторством: закрепляю JS после курса, правила игры — как играли вживую (в т.ч. с немцами).

**Подробные правила, user stories и схемы** — в папке [`docs/`](./docs/):

- [USER_STORIES.md](./docs/USER_STORIES.md) — требования от лица игрока
- [flowchart.html](./docs/flowchart.html) — графические блок-схемы (`npm run docs`)

Команды те же — см. **Quick start** выше.
