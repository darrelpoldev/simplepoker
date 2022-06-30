import { Test, TestingModule } from '@nestjs/testing';
import { CardOccurenceService } from '../card-occurence/card-occurence.service';
import { CardService } from '../card/card.service';
import { EvaluateHandService } from '../evaluate-hand/evaluate-hand.service';
import { FlushService } from '../hand-ranking/flush/flush.service';
import { FourOfAkindService } from '../hand-ranking/four-of-akind/four-of-akind.service';
import { FullHouseService } from '../hand-ranking/full-house/full-house.service';
import { OnePairService } from '../hand-ranking/one-pair/one-pair.service';
import { StraightFlushService } from '../hand-ranking/straight-flush/straight-flush.service';
import { StraightService } from '../hand-ranking/straight/straight.service';
import { ThreeOfAkindService } from '../hand-ranking/three-of-akind/three-of-akind.service';
import { TwoPairService } from '../hand-ranking/two-pair/two-pair.service';
import { DeciderService } from './decider.service';

describe('DeciderService', () => {
  let service: DeciderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeciderService, EvaluateHandService, OnePairService, TwoPairService, FourOfAkindService, StraightFlushService, StraightService, FullHouseService, CardOccurenceService, ThreeOfAkindService, FlushService, CardService],
    }).compile();

    service = module.get<DeciderService>(DeciderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
