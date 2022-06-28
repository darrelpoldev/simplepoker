import { Injectable } from '@nestjs/common';
import Card from '@models/Card';

@Injectable()
export class HighCardService {
    public getHighestRankingCard(cardPool: Card[]) {
        const sortResult = cardPool.sort(Card.sort);
        return sortResult[0];
    }
}
