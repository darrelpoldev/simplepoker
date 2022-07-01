import Card from "./Card";
import { Category } from "@enums/Category";
import HandCategory from "./HandCategory";
import SortHelper from "@shared/sort-helper";


export class Hand {
  public owner: string = '';
  public possibleHandCategories: HandCategory[] = [];
  private _cards: Card[];

  constructor(cards: Card[], owner: string = '') {
    this.owner = owner;
    this.CardPool = cards;
    this.possibleHandCategories.push(new HandCategory(Category.HIGH_CARD));
  }

  public set CardPool(playerCards: Card[]) {
    this._cards = playerCards;
  }

  public get CardPool() {
    return this._cards.sort(SortHelper.sort);
  }

  public get HighestHandCategory(): HandCategory {
    return this.possibleHandCategories.sort(SortHelper.sort)[0];
  }

  public get HighestRankingCard(): Card {
    return this.CardPool.sort(SortHelper.sort)[0];
  }

  public get InvalidCards(): Card[] {
    return this.CardPool?.filter(card => !card.isValidValue || !card.isValidSuit || !card.isValidLength);
  }

  public get InvalidCardString(): string[] {
    return this.InvalidCards?.map(card => `${card.value}${card.suit}`);
  }

  public get HasInvalidCards(): boolean {
    return this.InvalidCards.length > 0;
  }


}

export default Hand;