import Hand from "./Hand";

export class Result {
    public winningHand: Hand;

    public get category() {
        return this.winningHand.highestHandCategory;
    }

    public get winningCards() {
        return this.winningHand.cardPool;
    }
    
    public get highestRankingCard() {
        return this.winningHand.highestRankingCard;
    }
    
    constructor(hand: Hand) {
        this.winningHand = hand;
    }
}

export default Result;