import Hand from "./Hand";

export class Result {
    public winningHand: Hand;

    public get category() {
        return this.winningHand.HighestHandCategory;
    }

    public get winningCards() {
        return this.winningHand.CardPool;
    }
    
    public get highestRankingCard() {
        return this.winningHand.HighestRankingCard;
    }
    
}

export default Result;