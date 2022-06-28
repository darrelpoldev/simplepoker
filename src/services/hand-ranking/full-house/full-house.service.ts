import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import { CardOccurrence } from '@models/interfaces/CardOccurrence';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';

@Injectable()
export class FullHouseService {
    constructor(private cardOccurenceService: CardOccurenceService) { }

    evaluate(cardPool: Card[]) {
        const cardOccurence: CardOccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        const hasThreeOfAKind = cardOccurence.find(card => card.occurrence == 3);
        const hasAPair = cardOccurence.find(card => card.occurrence == 2);
        return hasThreeOfAKind && hasAPair;
    }
}
