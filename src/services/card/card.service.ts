import Card from '@/models/Card';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
    public fromArrayString(arrayString: string[]): Card[] {
        return arrayString.map(str => new Card(str.toUpperCase()));
    }
}
