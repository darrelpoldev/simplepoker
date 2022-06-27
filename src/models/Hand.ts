import Card from "./Card";
import { HandRank } from "../enums/HandRank";

export class Hand {
  owner: string = '';
  cardPool: Card[] = [];
  possibleHandCategories: HandRank[] = [];
  highestRankingCard!: Card;

  constructor(cards: Card[], owner: string = '') {
    this.owner = owner;
    this.cardPool = cards;
    this.possibleHandCategories.push(HandRank.HIGH_CARD);
  }
  
  evaluate() {
    
  }
 
}

export default Hand;