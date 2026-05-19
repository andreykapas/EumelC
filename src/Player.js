export class Player {
  name = "";
  hand = [];
  bid = null;
  tricksWon = 0;
  score = 0;

  constructor(name) {
    this.name = name;
  }

  receiveCards(cards) {
    cards.forEach((c) => this.hand.push(c));
  }

  playCard(card) {
    const index = this.hand.indexOf(card);
    if (index === -1) return null;
    return this.hand.splice(index, 1)[0];
  }

  getPlayableCards(leadSuit) {
    const hasLeadSuit = this.hand.some(
      (card) => card.suit.name === leadSuit.name,
    );
    return hasLeadSuit
      ? this.hand.filter((card) => card.suit.name === leadSuit.name)
      : this.hand;
  }

  addTrick() {
    this.tricksWon++;
  }

  calculateRoundScore() {
    if (this.bid === null) return;

    if (this.bid !== this.tricksWon) {
      this.score += this.tricksWon;
      return;
    }

    this.score += 10 + this.tricksWon;
  }
}
