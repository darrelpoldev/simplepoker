import { Test, TestingModule } from '@nestjs/testing';
import Card from '@models/Card';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';
import { TwoPairService } from './two-pair.service';
import { Category } from '@/enums/Category';

describe('TwoPairService', () => {
  let service: TwoPairService;
  const cardsWithTwoPair: Card[] = [
    new Card("AH"),
    new Card("AS"),
    new Card("KH"),
    new Card("JD"),
    new Card("JC")
  ];

  const cardsWithoutTwoPair: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwoPairService, CardOccurenceService],
    }).compile();

    service = module.get<TwoPairService>(TwoPairService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it(`should return true when a ${Category.TWO_PAIR} is detected`, () => {
      const result = service.evaluate(cardsWithTwoPair);
      expect(result.length).toBe(1);
    });
    
    it(`should return false when no ${Category.TWO_PAIR} is detected`, () => {
      const result = service.evaluate(cardsWithoutTwoPair);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });

});
