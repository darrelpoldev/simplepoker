import Card from "./Card";
import { HandRank } from "../enums/HandRank";

export class Hand {
  cardPool: Card[] = [];
  possibleHandCategories: HandRank[] = [];
  highestRankingCard!: Card;

  constructor(cards: Card[]) {
    this.cardPool = cards;
    this.possibleHandCategories.push(HandRank.HIGH_CARD);
  }
  
  evaluate() {
    
  }
 
}

export default Hand;