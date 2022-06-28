import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import { CardOccurrence } from '@models/interfaces/CardOccurrence';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';

@Injectable()
export class FourOfAkindService {

    constructor(private cardOccurenceService: CardOccurenceService) { }

    evaluate(cardPool: Card[]) {
        const cardOccurence: CardOccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        return cardOccurence.find(card => card.occurrence == 4);
    }
}
