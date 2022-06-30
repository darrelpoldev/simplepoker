import { CardOccurenceService } from '@/services/card-occurence/card-occurence.service';
import { CardService } from '@/services/card/card.service';
import { EvaluateHandService } from '@/services/evaluate-hand/evaluate-hand.service';
import { FlushService } from '@/services/hand-ranking/flush/flush.service';
import { FourOfAkindService } from '@/services/hand-ranking/four-of-akind/four-of-akind.service';
import { FullHouseService } from '@/services/hand-ranking/full-house/full-house.service';
import { OnePairService } from '@/services/hand-ranking/one-pair/one-pair.service';
import { StraightFlushService } from '@/services/hand-ranking/straight-flush/straight-flush.service';
import { StraightService } from '@/services/hand-ranking/straight/straight.service';
import { ThreeOfAkindService } from '@/services/hand-ranking/three-of-akind/three-of-akind.service';
import { TwoPairService } from '@/services/hand-ranking/two-pair/two-pair.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PlayController } from './play.controller';

describe('PlayController', () => {
  let controller: PlayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayController],
      providers: [CardService, EvaluateHandService, OnePairService, TwoPairService, FourOfAkindService, StraightFlushService, StraightService, FullHouseService, CardOccurenceService, ThreeOfAkindService, FlushService]
    }).compile();

    controller = module.get<PlayController>(PlayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
