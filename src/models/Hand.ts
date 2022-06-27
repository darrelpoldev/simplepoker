import Card from "./Card";
import { Category } from "../enums/Category";

export class Hand {
  owner: string = '';
  cardPool: Card[] = [];
  possibleHandCategories: Category[] = [];
  highestRankingCard!: Card;

  constructor(cards: Card[], owner: string = '') {
    this.owner = owner;
    this.cardPool = cards;
    this.possibleHandCategories.push(Category.HIGH_CARD);
  }
  
  evaluate() {
    
  }
 
}

export default Hand;