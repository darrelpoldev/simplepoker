import { Injectable } from '@nestjs/common';
import { HandRank } from 'src/enums/HandRank';
import Card from 'src/models/Card';
import Hand from 'src/models/Hand';
import { FlushService } from '../hand-ranking/flush/flush.service';
import { FourOfAkindService } from '../hand-ranking/four-of-akind/four-of-akind.service';
import { FullHouseService } from '../hand-ranking/full-house/full-house.service';
import { HighCardService } from '../hand-ranking/high-card/high-card.service';
import { OnePairService } from '../hand-ranking/one-pair/one-pair.service';
import { StraightFlushService } from '../hand-ranking/straight-flush/straight-flush.service';
import { StraightService } from '../hand-ranking/straight/straight.service';
import { ThreeOfAkindService } from '../hand-ranking/three-of-akind/three-of-akind.service';
import { TwoPairService } from '../hand-ranking/two-pair/two-pair.service';

@Injectable()
export class EvaluateHandService {
    hand: Hand;
    constructor(
        private readonly highCardService: HighCardService,
        private readonly onePairService: OnePairService,
        private readonly twoPairService: TwoPairService,
        private readonly threeOfAkindService: ThreeOfAkindService,
        private readonly fourOfAkindService: FourOfAkindService,
        private readonly straightService: StraightService,
        private readonly flushService: FlushService,
        private readonly fullHouseService: FullHouseService,
        private readonly straightFlushService: StraightFlushService,
        ) 
    {

    }
    public run() {
        if (this.hand == null) {
            throw ('Please provide a hand to evaluate.');
        }
        const cardPool = this.hand.cardPool.map(card => card);
        this.hand.highestRankingCard = this.highCardService.getHighestRankingCard(cardPool);
        
        const hasPair = this.onePairService.evaluate(cardPool);
        if (hasPair) {
            this.hand.possibleHandCategories.push(HandRank.ONE_PAIR);
        };
        
        const hasTwoPair = this.twoPairService.evaluate(cardPool);
        if (hasTwoPair) {
            this.hand.possibleHandCategories.push(HandRank.TWO_PAIR);
        };
        
        const hasThreeOfAKind = this.threeOfAkindService.evaluate(cardPool);
        
        if (hasThreeOfAKind) {
            this.hand.possibleHandCategories.push(HandRank.THREE_OF_A_KIND);
        };

        const hasFourOfAKind = this.fourOfAkindService.evaluate(cardPool);
        
        if (hasFourOfAKind) {
            this.hand.possibleHandCategories.push(HandRank.FOUR_OF_A_KIND);
        };

        const hasStraight = this.straightService.evaluate(cardPool);
        
        if (hasStraight) {
            this.hand.possibleHandCategories.push(HandRank.STRAIGHT);
        };

        const hasFlush = this.flushService.evaluate(cardPool);
        
        if (hasFlush) {
            this.hand.possibleHandCategories.push(HandRank.FLUSH);
        };

        const hasFullHouse = this.fullHouseService.evaluate(cardPool);
        
        if (hasFullHouse) {
            this.hand.possibleHandCategories.push(HandRank.FULL_HOUSE);
        };

        const hasStraightFlush = this.straightFlushService.evaluate(cardPool);
        
        if (hasStraightFlush) {
            this.hand.possibleHandCategories.push(HandRank.STRAIGHT_FLUSH);
        };

        console.log(this.hand);
    }
}
