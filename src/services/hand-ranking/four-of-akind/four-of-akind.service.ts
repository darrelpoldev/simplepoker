import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import { CardOccurrence } from '@/models/interfaces/CardOccurrence';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';
import HandCategory from '@/models/HandCategory';
import { Category } from '@/enums/Category';

@Injectable()
export class FourOfAkindService {

    constructor(private cardOccurenceService: CardOccurenceService) { }

    evaluate(cardPool: Card[]) {
        if (cardPool.length == 0) return [];
        const cardOccurence: CardOccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        return cardOccurence.find(card => card.occurrence == 4) ? [new HandCategory(Category.FOUR_OF_A_KIND)] : [];
    }
}
