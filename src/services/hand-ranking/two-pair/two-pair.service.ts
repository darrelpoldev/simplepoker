import { Injectable } from '@nestjs/common';
import Card from 'src/models/Card';
import { CardOccurrence } from 'src/models/interfaces/CardOccurrence';
import { CardOccurenceService } from 'src/services/card-occurence/card-occurence.service';

@Injectable()
export class TwoPairService {
    
    constructor(private cardOccurenceService: CardOccurenceService) {}

    evaluate(cardPool: Card[]) {
        const cardOccurence: CardOccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        const possibleTwoPairs = cardOccurence.filter(card => card.occurrence == 2);
        return possibleTwoPairs.length >= 2;
    }
}
