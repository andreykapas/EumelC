import { Deck } from "./Deck.js";
import { Player } from "./Player.js";

export class Game {
  playersArr = [];
  deck;

  constructor(numberOfPlayers) {
    for (let i = 1; i <= numberOfPlayers; i++) {
      this.playersArr.push(new Player(`Player ${i}`));
    }
  }

  startRound(cardsPerPlayer) {
    this.deck = new Deck();

    const hands = this.deck
      .shuffle()
      .deal(this.playersArr.length, cardsPerPlayer);

    for (let i = 0; i < this.playersArr.length; i++) {
      this.playersArr[i].hand = [];
      this.playersArr[i].receiveCards(hands[i]);
    }
  }
}
