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

}

export default Card;