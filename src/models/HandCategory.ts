import { handRank } from "@shared/constants";
import { Category } from "@enums/Category";

export class HandCategory {
  category: Category;
  rank: number = 0;
  
  constructor(handCategory: Category) {
    this.category = handCategory;
    this.rank = handRank.indexOf(this.category);
  }

  //TODO: Can we move this to a service?
  static sort(a: HandCategory, b: HandCategory) {
    if (a.rank > b.rank) {
      return -1;
    } else if (a.rank < b.rank) {
      return 1;
    } else {
      return 0;
    }
  }
}

export default HandCategory;