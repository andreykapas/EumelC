import { Card, SUITS, RANKS } from "./Card.js";

export class Deck {
  cards = [];

  constructor() {
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this;
  }

  deal(numPlayers, cardsPerPlayer) {
    const total = cardsPerPlayer * numPlayers;
    const hands = Array.from({ length: numPlayers }, () => []);

    this.cards.slice(0, total).forEach((card, i) => {
      hands[i % numPlayers].push(card);
    });
    return hands;
  }
}
