import { Test, TestingModule } from '@nestjs/testing';
import Card from '@models/Card';
import { CardOccurenceService } from '@services/card-occurence/card-occurence.service';
import { ThreeOfAkindService } from './three-of-akind.service';

describe('ThreeOfAkindService', () => {
  let service: ThreeOfAkindService;
  
  const cardsWithThreeOfAKind: Card[] = [
    new Card("AH"),
    new Card("AS"),
    new Card("AH"),
    new Card("2D"),
    new Card("JC")
  ];

  const cardsWithoutThreeOfAKind: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreeOfAkindService, CardOccurenceService],
    }).compile();

    service = module.get<ThreeOfAkindService>(ThreeOfAkindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it('should return true when a three of a kind is detected', () => {
      const result = service.evaluate(cardsWithThreeOfAKind);
      expect(result.length).toBe(1);
    });
    
    it('should return false when no three of a kind is detected', () => {
      const result = service.evaluate(cardsWithoutThreeOfAKind);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });
});
