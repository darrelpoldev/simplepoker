import { Injectable } from '@nestjs/common';
import Card from 'src/models/Card';
import { Cardoccurrence } from 'src/models/interfaces/Cardoccurrence';
import { CardOccurenceService } from 'src/services/card-occurence/card-occurence.service';

@Injectable()
export class TwoPairService {
    
    constructor(private cardOccurenceService: CardOccurenceService) {}

    evaluate(cardPool: Card[]) {
        const cardOccurence: Cardoccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        const possibleTwoPairs = cardOccurence.filter(card => card.occurrence == 2);
        return possibleTwoPairs.length >= 2;
    }
}
