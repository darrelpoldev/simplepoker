import Card from "./Card";
import { Category } from "../enums/Category";
import HandCategory from "./HandCategory";

export class Hand {
  owner: string = '';
  cardPool: Card[] = [];
  possibleHandCategories: HandCategory[] = [];
  highestRankingCard!: Card;

  constructor(cards: Card[], owner: string = '') {
    this.owner = owner;
    this.cardPool = cards;
    this.possibleHandCategories.push(new HandCategory(Category.HIGH_CARD));
  }
  
  evaluate() {
    
  }
 
}

export default Hand;