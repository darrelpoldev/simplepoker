import { Injectable } from '@nestjs/common';
import Card from 'src/models/Card';
import { Cardoccurrence } from 'src/models/interfaces/Cardoccurrence';

@Injectable()
export class CardOccurenceService {
    /**
     * evaluate
     */
    public evaluate(cardPool: Card[]) {
        const cardoccurrence: Cardoccurrence[] = []
        cardPool.forEach((card: Card) => {
            const duplicateCard = cardoccurrence.find(occurrence => occurrence.card.value == card.value);
            if (duplicateCard) {
                duplicateCard.occurrence +=1;
            }
            else {
                cardoccurrence.push({
                    card: card,
                    occurrence: 1
                });
            }
        });
        return cardoccurrence;
    }
}
