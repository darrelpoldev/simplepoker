import { cardRank, validSuits } from "@shared/constants";

export class Card {
  value: string = '';
  suit: string = '';
  rank: number = 0;
  isValidValue: boolean;
  isValidSuit: boolean;
  isValidLength: boolean;
  
  constructor(inputCard: string) {
    this.value = inputCard.substring(0, 1);
    this.suit = inputCard.substring(1, 2).toUpperCase();
    this.rank = cardRank.indexOf(this.value);
    this.isValidValue = this.rank >= 0;
    this.isValidSuit = validSuits.indexOf(this.suit) >= 0;
    this.isValidLength = inputCard.length == 2;
  }

}

export default Card;