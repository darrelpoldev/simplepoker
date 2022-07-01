import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import { CardOccurrence } from '@models/interfaces/CardOccurrence';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';
import { Category } from '@/enums/Category';
import HandCategory from '@/models/HandCategory';

@Injectable()
export class OnePairService { 

    constructor(private cardOccurenceService: CardOccurenceService) { }

    evaluate(cardPool: Card[]) {
        if (cardPool.length == 0) return [];
        const cardOccurence: CardOccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        return cardOccurence.find(card => card.occurrence == 2) ? [new HandCategory(Category.ONE_PAIR)] : [];
    }
}
