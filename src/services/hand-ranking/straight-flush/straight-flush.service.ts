import { Injectable } from '@nestjs/common';
import Card from 'src/models/Card';
import { FlushService } from '../flush/flush.service';
import { StraightService } from '../straight/straight.service';

@Injectable()
export class StraightFlushService {

    constructor(private straightService: StraightService, private flushService: FlushService) {}

    evaluate(cardPool: Card[]) {
        const isStraigh = this.straightService.evaluate(cardPool);
        const isFlush = this.flushService.evaluate(cardPool);
        return isStraigh && isFlush;
    }
}