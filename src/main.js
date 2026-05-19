import { Deck } from "./Deck.js";

const table = document.querySelector("#table");
const status = document.querySelector("#status");

function renderCard(card) {
  const el = document.createElement("span");
  el.className = `card ${card.colorClass}`;
  el.textContent = card.toPlain();
  return el;
}

function renderHands(hands) {
  table.replaceChildren();

  hands.forEach((hand, i) => {
    const player = document.createElement("section");
    player.className = "player";

    const title = document.createElement("h2");
    title.textContent = `Игрок ${i + 1} (${hand.length} карт)`;
    player.append(title);

    const cards = document.createElement("div");
    cards.className = "hand";
    hand.forEach((card) => cards.append(renderCard(card)));
    player.append(cards);

    table.append(player);
  });
}

const hands = new Deck().shuffle().deal(4, 1);
status.textContent = "Колода раздана — 4 игрока по 1 карте";
renderHands(hands);
