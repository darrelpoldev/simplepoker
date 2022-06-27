import { HandRank } from "./enums/HandRank";

//  suits = H:HEART, S:SPADE, D:DIAMOND, C:CLUBS 
const cardRank = [
    '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const handRank = [
    HandRank.HIGH_CARD, 
    HandRank.ONE_PAIR, 
    HandRank.TWO_PAIR, 
    HandRank.THREE_OF_A_KIND, 
    HandRank.STRAIGHT, 
    HandRank.FLUSH, 
    HandRank.FULL_HOUSE, 
    HandRank.FOUR_OF_A_KIND, 
    HandRank.STRAIGHT_FLUSH
];


export { cardRank, handRank };