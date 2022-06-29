import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import { CardOccurrence } from '@models/interfaces/CardOccurrence';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';
import HandCategory from '@/models/HandCategory';
import { Category } from '@/enums/Category';

@Injectable()
export class TwoPairService {
    
    constructor(private cardOccurenceService: CardOccurenceService) {}

    evaluate(cardPool: Card[]) {
        const cardOccurence: CardOccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        const possibleTwoPairs = cardOccurence.filter(card => card.occurrence == 2);
        return possibleTwoPairs.length == 2 ? [new HandCategory(Category.TWO_PAIR)] : [];
    }
}
