import { Test, TestingModule } from '@nestjs/testing';
import Card from '../../../models/Card';
import { CardOccurenceService } from '../../card-occurence/card-occurence.service';
import { TwoPairService } from './two-pair.service';

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
    it('should return true when a two pair is detected', () => {
      expect(service.evaluate(cardsWithTwoPair)).toBeTruthy();
    });
    
    it('should return false when no two pair is detected', () => {
      expect(service.evaluate(cardsWithoutTwoPair)).toBeFalsy();
    });
    
    it('should return false when cardpool is empty', () => {
      expect(service.evaluate([])).toBeFalsy();
    });
  });

});
