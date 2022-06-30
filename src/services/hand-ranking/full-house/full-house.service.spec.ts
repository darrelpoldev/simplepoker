import { Category } from '@/enums/Category';
import Card from '@/models/Card';
import { CardOccurenceService } from '@/services/card-occurence/card-occurence.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FullHouseService } from './full-house.service';

describe('FullHouseService', () => {
  let service: FullHouseService;

  const cardsWithFullHouse: Card[] = [
    new Card("AD"),
    new Card("AD"),
    new Card("JD"),
    new Card("JS"),
    new Card("JH")
  ];

  const cardsWithoutFullHouse: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FullHouseService, CardOccurenceService],
    }).compile();

    service = module.get<FullHouseService>(FullHouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it(`should return true when a ${Category.FULL_HOUSE} is detected`, () => {
      const result = service.evaluate(cardsWithFullHouse);
      expect(result.length).toBe(1);
    });
    
    it(`should return false when no ${Category.FULL_HOUSE} is detected`, () => {
      const result = service.evaluate(cardsWithoutFullHouse);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });
});
