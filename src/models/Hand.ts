import Card from "./Card";
import { Category } from "@enums/Category";
import HandCategory from "./HandCategory";


export class Hand {
  owner: string = '';
  //  TODO: Create getter and setter   
  cardPool: Card[] = [];
  //  TODO: Create getter and setter 
  possibleHandCategories: HandCategory[] = [];
  //  TODO: Create getter and setter 
  highestRankingCard: Card;
  //  TODO: Create getter and setter 
  highestHandCategory: HandCategory;

  constructor(cards: Card[], owner: string = '') {
    this.owner = owner;
    this.cardPool = cards;
    this.possibleHandCategories.push(new HandCategory(Category.HIGH_CARD));
  }
  
  evaluate() {
    
  }
 
}

export default Hand;