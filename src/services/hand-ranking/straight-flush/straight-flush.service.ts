import { Injectable } from '@nestjs/common';
import Card from '@models/Card';
import { FlushService } from '../flush/flush.service';
import { StraightService } from '../straight/straight.service';
import HandCategory from '@/models/HandCategory';
import { Category } from '@/enums/Category';

@Injectable()
export class StraightFlushService {

    constructor(private straightService: StraightService, private flushService: FlushService) {}

    evaluate(cardPool: Card[]) {
        if (cardPool.length == 0) return [];
        const isStraight = this.straightService.evaluate(cardPool).length;
        const isFlush = this.flushService.evaluate(cardPool).length;
        return (isStraight && isFlush) ? [new HandCategory(Category.STRAIGHT_FLUSH)] : [];
    }
}
