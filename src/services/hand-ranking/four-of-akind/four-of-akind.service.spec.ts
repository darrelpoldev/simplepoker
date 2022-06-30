import { Category } from '@/enums/Category';
import Card from '@/models/Card';
import { CardOccurenceService } from '@/services/card-occurence/card-occurence.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FourOfAkindService } from './four-of-akind.service';

describe('FourOfAkindService', () => {
  let service: FourOfAkindService;

  const cardsWithFourOfAKind: Card[] = [
    new Card("AD"),
    new Card("JD"),
    new Card("JD"),
    new Card("JS"),
    new Card("JH")
  ];

  const cardsWithoutFourOfAKind: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FourOfAkindService, CardOccurenceService],
    }).compile();

    service = module.get<FourOfAkindService>(FourOfAkindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it(`should return true when a ${Category.FOUR_OF_A_KIND} is detected`, () => {
      const result = service.evaluate(cardsWithFourOfAKind);
      expect(result.length).toBe(1);
    });
    
    it(`should return false when no ${Category.FOUR_OF_A_KIND} is detected`, () => {
      const result = service.evaluate(cardsWithoutFourOfAKind);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });
});
