import Card from "@/models/Card";
import HandCategory from "@/models/HandCategory";

export class SortHelper {
  static sort(a: Card | HandCategory, b: Card | HandCategory) {
    if (a.rank > b.rank) {
      return -1;
    } else if (a.rank < b.rank) {
      return 1;
    } else {
      return 0;
    }
  }
}

export default SortHelper;