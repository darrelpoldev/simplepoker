import { Category } from '@/enums/Category';
import Card from '@/models/Card';
import { CardOccurenceService } from '@/services/card-occurence/card-occurence.service';
import { Test, TestingModule } from '@nestjs/testing';
import { OnePairService } from './one-pair.service';

describe('OnePairService', () => {
  let service: OnePairService;

  const cardsWithOnePair: Card[] = [
    new Card("AD"),
    new Card("AD"),
    new Card("JD"),
    new Card("QS"),
    new Card("KH")
  ];

  const cardsWithoutOnePair: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnePairService, CardOccurenceService],
    }).compile();

    service = module.get<OnePairService>(OnePairService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it(`should return true when a ${Category.ONE_PAIR} is detected`, () => {
      const result = service.evaluate(cardsWithOnePair);
      expect(result.length).toBe(1);
    });
    
    it(`should return false when no ${Category.ONE_PAIR} is detected`, () => {
      const result = service.evaluate(cardsWithoutOnePair);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });
});
