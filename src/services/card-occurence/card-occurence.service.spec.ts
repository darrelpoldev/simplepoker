import Card from '@/models/Card';
import { Test, TestingModule } from '@nestjs/testing';
import { CardOccurenceService } from './card-occurence.service';

describe('CardOccurenceService', () => {
  let service: CardOccurenceService;
  const testCardsWith3Occurence: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("2H"),
    new Card("2D"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardOccurenceService],
    }).compile();

    service = module.get<CardOccurenceService>(CardOccurenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when finding an occurence of 3', () => {
    it('should return the number of cards occurence', () => {
      const actResult = service.evaluate(testCardsWith3Occurence);
      const filterResut = actResult.filter(act => act.occurrence === 3);
      expect(filterResut.length).toBe(1);
    });
  });
});
