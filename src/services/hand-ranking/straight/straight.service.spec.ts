import { Category } from '@/enums/Category';
import Card from '@/models/Card';
import { Test, TestingModule } from '@nestjs/testing';
import { StraightService } from './straight.service';

describe('StraightService', () => {
  let service: StraightService;

  const cardsWithStraight: Card[] = [
    new Card("AD"),
    new Card("TD"),
    new Card("JD"),
    new Card("QS"),
    new Card("KH")
  ];

  const cardsWithoutStraight: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StraightService],
    }).compile();

    service = module.get<StraightService>(StraightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it(`should return true when a ${Category.STRAIGHT} is detected`, () => {
      const result = service.evaluate(cardsWithStraight);
      expect(result.length).toBe(1);
    });
    
    it(`should return false when no ${Category.STRAIGHT} is detected`, () => {
      const result = service.evaluate(cardsWithoutStraight);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });
});
