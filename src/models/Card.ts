import { cardRank } from "@shared/constants";

export class Card {
  value = '';
  suit = '';
  rank: number = 0;
  
  constructor(inputCard: string) {
    this.value = inputCard.substring(0, 1);
    this.suit = inputCard.substring(1, 2).toUpperCase();
    this.rank = cardRank.indexOf(this.value);
  }

  //TODO: Can we move this to a service?
  static sort(a: Card, b: Card) {
    if (a.rank > b.rank) {
      return -1;
    } else if (a.rank < b.rank) {
      return 1;
    } else {
      return 0;
    }
  }
}

export default Card;