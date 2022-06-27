import { Injectable } from '@nestjs/common';
import Card from 'src/models/Card';
import { Cardoccurrence } from 'src/models/interfaces/Cardoccurrence';
import { CardOccurenceService } from 'src/services/card-occurence/card-occurence.service';

@Injectable()
export class FullHouseService {
    constructor(private cardOccurenceService: CardOccurenceService) { }

    evaluate(cardPool: Card[]) {
        const cardOccurence: Cardoccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        const hasThreeOfAKind = cardOccurence.find(card => card.occurrence == 3);
        const hasAPair = cardOccurence.find(card => card.occurrence == 2);
        return hasThreeOfAKind && hasAPair;
    }
}
