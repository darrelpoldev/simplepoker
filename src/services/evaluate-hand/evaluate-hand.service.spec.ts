import { Category } from '@/enums/Category';
import Card from '@/models/Card';
import Hand from '@/models/Hand';
import HandCategory from '@/models/HandCategory';
import { Test, TestingModule } from '@nestjs/testing';
import { CardOccurenceService } from '../card-occurence/card-occurence.service';
import { FlushService } from '../hand-ranking/flush/flush.service';
import { FourOfAkindService } from '../hand-ranking/four-of-akind/four-of-akind.service';
import { FullHouseService } from '../hand-ranking/full-house/full-house.service';
import { OnePairService } from '../hand-ranking/one-pair/one-pair.service';
import { StraightFlushService } from '../hand-ranking/straight-flush/straight-flush.service';
import { StraightService } from '../hand-ranking/straight/straight.service';
import { ThreeOfAkindService } from '../hand-ranking/three-of-akind/three-of-akind.service';
import { TwoPairService } from '../hand-ranking/two-pair/two-pair.service';
import { EvaluateHandService } from './evaluate-hand.service';

describe('EvaluateHandService', () => {
  let evaluateHandService: EvaluateHandService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluateHandService,
        OnePairService,
        TwoPairService,
        ThreeOfAkindService,
        FourOfAkindService,
        StraightService,
        FlushService,
        FullHouseService,
        StraightFlushService,
        CardOccurenceService
      ],
    }).compile();

    evaluateHandService = module.get<EvaluateHandService>(EvaluateHandService);
  });

  it('should be defined', () => {
    expect(evaluateHandService).toBeDefined();
  });

  describe('when a hand is evaluated', () => {
    let testCard: Card[];
    let testHand: Hand;
    let actResult: Hand;
    let handCategories: HandCategory[];

    beforeEach(() => {
      testCard = [];
      testHand = null;
      actResult = null;
      handCategories = [];
    });

    it(`it should have a ${Category.HIGH_CARD}`, () => {
      testCard = [
        new Card("AD"), 
        new Card("2S"), 
        new Card("4H"), 
        new Card("1C"), 
        new Card("6D")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.HIGH_CARD);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.ONE_PAIR}`, () => {
      testCard = [
        new Card("2D"), 
        new Card("2S"), 
        new Card("4H"), 
        new Card("1C"), 
        new Card("6D")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.ONE_PAIR);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.TWO_PAIR}`, () => {
      testCard = [
        new Card("2D"), 
        new Card("2S"), 
        new Card("4H"), 
        new Card("6C"), 
        new Card("6D")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.TWO_PAIR);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.THREE_OF_A_KIND}`, () => {
      testCard = [
        new Card("2D"), 
        new Card("2S"), 
        new Card("2H"), 
        new Card("AC"), 
        new Card("KD")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.THREE_OF_A_KIND);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.FOUR_OF_A_KIND}`, () => {
      testCard = [
        new Card("2D"), 
        new Card("2S"), 
        new Card("2H"), 
        new Card("2C"), 
        new Card("KD")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.FOUR_OF_A_KIND);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.STRAIGHT}`, () => {
      testCard = [
        new Card("AD"), 
        new Card("TS"), 
        new Card("JH"), 
        new Card("QC"), 
        new Card("KD")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.STRAIGHT);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.FLUSH}`, () => {
      testCard = [
        new Card("AD"), 
        new Card("TD"), 
        new Card("JD"), 
        new Card("QD"), 
        new Card("KD")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.FLUSH);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.FULL_HOUSE}`, () => {
      testCard = [
        new Card("AD"), 
        new Card("AC"), 
        new Card("AS"), 
        new Card("QS"), 
        new Card("QH")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.FULL_HOUSE);
      expect(handCategories.length).toBe(1);
    });

    it(`it should detect a ${Category.STRAIGHT_FLUSH}`, () => {
      testCard = [
        new Card("AD"), 
        new Card("TD"), 
        new Card("JD"), 
        new Card("QD"), 
        new Card("KD")
      ];
      testHand = new Hand(testCard);
      actResult = evaluateHandService.run(testHand);
      handCategories = actResult.possibleHandCategories.filter(possibleCategory => possibleCategory.category == Category.STRAIGHT_FLUSH);
      expect(handCategories.length).toBe(1);
    });

    describe('when PLAYER ONE has the winning cards', () => {
      const playerOneTestCards = [
        new Card("2D"), 
        new Card("2S"), 
        new Card("4H"), 
        new Card("1C"), 
        new Card("6D")
      ];
      const playerOneTestHands = new Hand(playerOneTestCards);
  
      const playerTwoTestCards = [
        new Card("8D"), 
        new Card("QS"), 
        new Card("4H"), 
        new Card("1C"), 
        new Card("6D")
      ];
      const playerTwoTestHands = new Hand(playerTwoTestCards);
  
      it("should return PLAYER ONE cards", () => {
        const result = evaluateHandService.decide(playerOneTestHands, playerTwoTestHands);
        const winningHand = result.winningCards;
        expect(winningHand).toBe(playerOneTestCards);
      });
  
    });

    describe('when PLAYER TWO has the winning cards', () => {
      const playerOneTestCards = [
        new Card("2D"), 
        new Card("2S"), 
        new Card("4H"), 
        new Card("1C"), 
        new Card("6D")
      ];
      const playerOneTestHands = new Hand(playerOneTestCards);
  
      const playerTwoTestCards = [
        new Card("8D"), 
        new Card("AS"), 
        new Card("AH"), 
        new Card("AC"), 
        new Card("6D")
      ];
      const playerTwoTestHands = new Hand(playerTwoTestCards);
  
      it("should return PLAYER TWO cards", () => {
        const result = evaluateHandService.decide(playerOneTestHands, playerTwoTestHands);
        const winningHand = result.winningCards;
        expect(winningHand).toBe(playerTwoTestCards);
      });
  
    });
  });

  
  
  


});
