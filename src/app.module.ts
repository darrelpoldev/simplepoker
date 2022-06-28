import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';
import { EvaluateHandService } from '@services/evaluate-hand/evaluate-hand.service';
import { FlushService } from '@services/hand-ranking/flush/flush.service';
import { FourOfAkindService } from '@services/hand-ranking/four-of-akind/four-of-akind.service';
import { FullHouseService } from '@services/hand-ranking/full-house/full-house.service';
import { HighCardService } from '@services/hand-ranking/high-card/high-card.service';
import { OnePairService } from '@services/hand-ranking/one-pair/one-pair.service';
import { StraightService } from '@services/hand-ranking/straight/straight.service';
import { StraightFlushService } from '@services/hand-ranking/straight-flush/straight-flush.service';
import { ThreeOfAkindService } from '@services/hand-ranking/three-of-akind/three-of-akind.service';
import { TwoPairService } from '@services/hand-ranking/two-pair/two-pair.service';
import { DeciderService } from '@services/decider/decider.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CardOccurenceService, EvaluateHandService, FlushService, FourOfAkindService, FullHouseService, HighCardService, OnePairService, StraightService, StraightFlushService, ThreeOfAkindService, TwoPairService, DeciderService],
})
export class AppModule {}
