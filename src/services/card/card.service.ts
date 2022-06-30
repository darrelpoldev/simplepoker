import Card from '@/models/Card';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
    public convertfromArrayString(arrayString: string[]): Card[] {
        return arrayString.map(str => new Card(str.toUpperCase()));
    }
}
