import { Category } from '@/enums/Category';
import Card from '@/models/Card';
import { Test, TestingModule } from '@nestjs/testing';
import { FlushService } from '../flush/flush.service';
import { StraightService } from '../straight/straight.service';
import { StraightFlushService } from './straight-flush.service';

describe('StraightFlushService', () => {
  let service: StraightFlushService;

  const cardsWithStraightFlush: Card[] = [
    new Card("AD"),
    new Card("TD"),
    new Card("JD"),
    new Card("QD"),
    new Card("KD")
  ];

  const cardsWithoutStraightFlush: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StraightFlushService, FlushService, StraightService],
    }).compile();

    service = module.get<StraightFlushService>(StraightFlushService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it(`should return true when a ${Category.STRAIGHT_FLUSH} is detected`, () => {
      const result = service.evaluate(cardsWithStraightFlush);
      expect(result.length).toBe(1);
    });
    
    it(`should return false when no ${Category.STRAIGHT_FLUSH} is detected`, () => {
      const result = service.evaluate(cardsWithoutStraightFlush);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });
});
