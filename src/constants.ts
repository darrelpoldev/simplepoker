import { HandCategory } from "./enums/HandCategory";

//  suits = H:HEART, S:SPADE, D:DIAMOND, C:CLUBS 
const cardRank = [
    '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const handRank = [
    HandCategory.HIGH_CARD, 
    HandCategory.ONE_PAIR, 
    HandCategory.TWO_PAIR, 
    HandCategory.THREE_OF_A_KIND, 
    HandCategory.STRAIGHT, 
    HandCategory.FLUSH, 
    HandCategory.FULL_HOUSE, 
    HandCategory.FOUR_OF_A_KIND, 
    HandCategory.STRAIGHT_FLUSH
];


export { cardRank, handRank };