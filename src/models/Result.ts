import Hand from "./Hand";

export class Result {
    public winningHand: Hand;

    public get playerName() {
        return this.winningHand?.owner;
    }

    public get category() {
        return this.winningHand?.HighestHandCategory;
    }

    public get winningCards() {
        return this.winningHand?.CardPool;
    }
    
    public get winningCardString() {
        return this.winningCards?.map(card => `${card.value}${card.suit}`);
    }
    
    public get highestRankingCard() {
        return this.winningHand?.HighestRankingCard;
    }

    constructor(_winningHand?: Hand) {
        this.winningHand = _winningHand;
    }
    
}

export default Result;