import { handRank } from "@shared/constants";
import { Category } from "@enums/Category";

export class HandCategory {
  category: Category;
  rank: number = 0;
  
  constructor(handCategory: Category) {
    this.category = handCategory;
    this.rank = handRank.indexOf(this.category);
  }
}

export default HandCategory;