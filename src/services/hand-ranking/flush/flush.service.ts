import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import HandCategory from '@/models/HandCategory';
import { Category } from '@/enums/Category';

@Injectable()
export class FlushService {
    constructor() {}

    evaluate(cardPool: Card[]) {
        const cards = cardPool.map(card => card);
        const firstCard = cards.at(0);
        const numberWithSameSuit = cards.filter(card => card.suit == firstCard.suit);
        return (cards.length == numberWithSameSuit.length) ? [new HandCategory(Category.FLUSH)] : [];
    }
}
