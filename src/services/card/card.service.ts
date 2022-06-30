import Card from '@/models/Card';
import { cardRank, validSuits } from '@/shared/constants';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
    public convertfromArrayString(arrayString: string[]): Card[] {
        return arrayString.map(str => new Card(str.toUpperCase()));
    }

    public getRandomCards(multiplier: number): string[] {
        const randomCards: string[] = [];
        const deck: string[] = [];

        for (let s = 0; s < validSuits.length; s++) {
            for (let v = 0; v < cardRank.length; v++) {
                deck.push(`${cardRank[v]}${validSuits[s]}`)
            }
        }

        for (let index = 0; index < multiplier; index++) {
            const random = Math.floor(Math.random() * deck.length);  
            const card = deck[random];
            randomCards.push(card);
        }
        return randomCards;
    }
}
