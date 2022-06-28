import { Injectable } from '@nestjs/common';
import Card from '@models/Card';

@Injectable()
export class StraightService {
    
    constructor() {}

    evaluate(cardPool: Card[]) {
        const cards = cardPool.map(card => card).sort(Card.sort);
        const ranks = cards.map(card => card.rank);
        const isStraight = ranks.every((rank: number, index: number, rankArray: number[]) => {
            const isSequential = rank - rankArray[index + 1] == 1
            const isLastIndex = index == rankArray.length - 1;
            return isSequential || isLastIndex;
        });
        return isStraight;
    }
}
