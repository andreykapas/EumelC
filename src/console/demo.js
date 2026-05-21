import { Card, SUITS, RANKS } from "../Card.js";
import { Deck } from "../Deck.js";
import { Game } from "../Game.js";

// const ace = new Card(
//   SUITS.find((s) => s.name === "Spades"),
//   RANKS[12],
// );
// const king = new Card(SUITS[3], RANKS[11]);
// const ten = new Card(SUITS[0], RANKS[8]);
// const two_diamonds = new Card(SUITS[1], RANKS[0]);

// console.log(`${ace} бьёт ${king}?`, ace.beats(king));
// console.log(`${ten} бьёт ${king}?`, ten.beats(king));
// console.log(`${two_diamonds} бьёт ${ten}?`, two_diamonds.beats(ten));

// const deck = new Deck();

// const hands = deck.shuffle().deal(5, 10);
// hands.forEach((hand, i) => {
//   console.log(
//     `Игрок ${i + 1} (${hand.length} карт):`,
//     hand.map((c) => c.toString()).join(" "),
//   );
// });

// console.log(deck.cards.length);

const game = new Game(4);
game.startRound(3);
game.startRound(3);

game.playersArr.forEach((p) => console.log(p.name, p.hand.length));
console.log("остаток:", game.deck.cards.length);
