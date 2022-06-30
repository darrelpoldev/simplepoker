import { Category } from "@enums/Category";

//  suits = H:HEART, S:SPADE, D:DIAMOND, C:CLUBS 
const cardRank = [
    '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const handRank = [
    Category.HIGH_CARD, 
    Category.ONE_PAIR, 
    Category.TWO_PAIR, 
    Category.THREE_OF_A_KIND, 
    Category.STRAIGHT, 
    Category.FLUSH, 
    Category.FULL_HOUSE, 
    Category.FOUR_OF_A_KIND, 
    Category.STRAIGHT_FLUSH
];

const validSuits = [ 'S', 'H', 'D', 'C'  ];

export { cardRank, handRank, validSuits };