// Масти по силе: ♠(4) > ♣(3) > ♦(2) > ♥(1)
// Ранги по силе:  A(14) > K(13) > Q(12) > J(11) > 10..2

const R = "\x1b[31m"; // red
const B = "\x1b[34m"; // blue
const _ = "\x1b[0m"; // reset

export const RESET = _;

export const SUITS = [
  { name: "Hearts", symbol: "♥", power: 1, color: R },
  { name: "Diamonds", symbol: "♦", power: 2, color: R },
  { name: "Clubs", symbol: "♣", power: 3, color: B },
  { name: "Spades", symbol: "♠", power: 4, color: B },
];

export const RANKS = [
  { name: "2", short: "2", value: 2 },
  { name: "3", short: "3", value: 3 },
  { name: "4", short: "4", value: 4 },
  { name: "5", short: "5", value: 5 },
  { name: "6", short: "6", value: 6 },
  { name: "7", short: "7", value: 7 },
  { name: "8", short: "8", value: 8 },
  { name: "9", short: "9", value: 9 },
  { name: "10", short: "10", value: 10 },
  { name: "J", short: "J", value: 11 },
  { name: "Q", short: "Q", value: 12 },
  { name: "K", short: "K", value: 13 },
  { name: "A", short: "A", value: 14 },
];

export class Card {
  constructor(suit, rank) {
    this.suit = suit; // объект из SUITS
    this.rank = rank; // объект из RANKS
  }

  // Читаемое представление карты: "A♠", "10♥"
  toString() {
    return `${this.suit.color}${this.rank.short}${this.suit.symbol}${RESET}`;
  }

  // Для браузера — без ANSI-кодов, только текст
  toPlain() {
    return `${this.rank.short}${this.suit.symbol}`;
  }

  get colorClass() {
    return this.suit.power <= 2 ? "red" : "blue";
  }

  // Бьёт ли эта карта другую
  // Старшая масть (по power) бьёт любую младшую, независимо от ранга.
  // При одинаковой масти — побеждает старший ранг.
  beats(other) {
    if (this.suit.power !== other.suit.power) {
      return this.suit.power > other.suit.power;
    }
    return this.rank.value > other.rank.value;
  }
}
