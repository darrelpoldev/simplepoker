import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import { CardOccurrence } from '@/models/interfaces/CardOccurrence';

@Injectable()
export class CardOccurenceService {
    /**
     * evaluate
     */
    public evaluate(cardPool: Card[]) {
        const cardoccurrence: CardOccurrence[] = []
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
