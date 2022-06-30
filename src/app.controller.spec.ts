import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardOccurenceService } from './services/card-occurence/card-occurence.service';
import { EvaluateHandService } from './services/evaluate-hand/evaluate-hand.service';
import { FlushService } from './services/hand-ranking/flush/flush.service';
import { FourOfAkindService } from './services/hand-ranking/four-of-akind/four-of-akind.service';
import { FullHouseService } from './services/hand-ranking/full-house/full-house.service';
import { OnePairService } from './services/hand-ranking/one-pair/one-pair.service';
import { StraightFlushService } from './services/hand-ranking/straight-flush/straight-flush.service';
import { StraightService } from './services/hand-ranking/straight/straight.service';
import { ThreeOfAkindService } from './services/hand-ranking/three-of-akind/three-of-akind.service';
import { TwoPairService } from './services/hand-ranking/two-pair/two-pair.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, EvaluateHandService, OnePairService, TwoPairService, ThreeOfAkindService, FourOfAkindService, StraightService, FlushService, FullHouseService, StraightFlushService, CardOccurenceService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
