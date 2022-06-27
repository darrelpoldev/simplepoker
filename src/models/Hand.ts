import Card from "./Card";
import { HandCategory } from "../enums/HandCategory";

export class Hand {
  owner: string = '';
  cardPool: Card[] = [];
  possibleHandCategories: HandCategory[] = [];
  highestRankingCard!: Card;

  constructor(cards: Card[], owner: string = '') {
    this.owner = owner;
    this.cardPool = cards;
    this.possibleHandCategories.push(HandCategory.HIGH_CARD);
  }
  
  evaluate() {
    
  }
 
}

export default Hand;