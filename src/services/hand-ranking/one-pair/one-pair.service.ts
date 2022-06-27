import { Injectable } from '@nestjs/common';
import { HandRank } from 'src/enums/HandRank';
import Card from 'src/models/Card';
import Hand from 'src/models/Hand';
import { Cardoccurrence } from 'src/models/interfaces/Cardoccurrence';
import { CardOccurenceService } from 'src/services/card-occurence/card-occurence.service';

@Injectable()
export class OnePairService { 

    constructor(private cardOccurenceService: CardOccurenceService) { }

    evaluate(cardPool: Card[]) {
        const cardOccurence: Cardoccurrence[] = this.cardOccurenceService.evaluate(cardPool);
        return cardOccurence.find(card => card.occurrence == 2);
    }
}
