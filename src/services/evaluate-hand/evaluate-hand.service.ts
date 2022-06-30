import { Injectable } from '@nestjs/common';
import Hand from '@models/Hand';
import { FlushService } from '../hand-ranking/flush/flush.service';
import { FourOfAkindService } from '../hand-ranking/four-of-akind/four-of-akind.service';
import { FullHouseService } from '../hand-ranking/full-house/full-house.service';
import { OnePairService } from '../hand-ranking/one-pair/one-pair.service';
import { StraightFlushService } from '../hand-ranking/straight-flush/straight-flush.service';
import { StraightService } from '../hand-ranking/straight/straight.service';
import { ThreeOfAkindService } from '../hand-ranking/three-of-akind/three-of-akind.service';
import { TwoPairService } from '../hand-ranking/two-pair/two-pair.service';
import Result from '@models/Result';
import { Category } from '@/enums/Category';
import HandCategory from '@/models/HandCategory';
import SortHelper from '@/shared/sort-helper';

@Injectable()
export class EvaluateHandService {
    constructor(
        private readonly onePairService: OnePairService,
        private readonly twoPairService: TwoPairService,
        private readonly threeOfAkindService: ThreeOfAkindService,
        private readonly fourOfAkindService: FourOfAkindService,
        private readonly straightService: StraightService,
        private readonly flushService: FlushService,
        private readonly fullHouseService: FullHouseService,
        private readonly straightFlushService: StraightFlushService,
        ) { }

    public run(hand: Hand) {
        const cardPool = hand.CardPool.map(card => card);
        hand.possibleHandCategories.push(...this.onePairService.evaluate(cardPool));
        hand.possibleHandCategories.push(...this.twoPairService.evaluate(cardPool));
        hand.possibleHandCategories.push(...this.threeOfAkindService.evaluate(cardPool));
        hand.possibleHandCategories.push(...this.fourOfAkindService.evaluate(cardPool));
        hand.possibleHandCategories.push(...this.straightService.evaluate(cardPool));
        hand.possibleHandCategories.push(...this.flushService.evaluate(cardPool));
        hand.possibleHandCategories.push(...this.fullHouseService.evaluate(cardPool));
        hand.possibleHandCategories.push(...this.straightFlushService.evaluate(cardPool));
        return hand;
    }

    public decide(_handOne: Hand, _handTwo: Hand) : Result {
        const handOne = this.run(_handOne);
        const handTwo = this.run(_handTwo);
        const competingHands: Hand[] = [handOne, handTwo];
        const showDownResult = competingHands.sort((aHand, bHand) => SortHelper.sort(aHand.HighestHandCategory, bHand.HighestHandCategory));
        const handWithHighestRankingCard = showDownResult.filter(hand => hand.possibleHandCategories.length == 1);
        const decideByHighCard = handWithHighestRankingCard.length == 2;
        const tie = handOne.HighestRankingCard.rank == handTwo.HighestRankingCard.rank;
        const result = new Result();
        if (decideByHighCard) {
            if (!tie) {
                const winnerByHighCard = competingHands.sort((aHand, bHand) => SortHelper.sort(aHand.HighestRankingCard, bHand.HighestRankingCard));
                result.winningHand = winnerByHighCard.shift();    
            }
        }
        else {
            result.winningHand = showDownResult.shift();
        }
        return result;
    }
}
