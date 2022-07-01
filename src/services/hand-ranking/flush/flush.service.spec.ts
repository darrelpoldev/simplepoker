import { Category } from '@/enums/Category';
import Card from '@/models/Card';
import { Test, TestingModule } from '@nestjs/testing';
import { FlushService } from './flush.service';

describe('FlushService', () => {
  let service: FlushService;

  const cardsWithFlush: Card[] = [
    new Card("AD"),
    new Card("JD"),
    new Card("JD"),
    new Card("JD"),
    new Card("JD")
  ];

  const cardsWithoutFlush: Card[] = [
    new Card("AH"),
    new Card("2S"),
    new Card("KH"),
    new Card("QD"),
    new Card("JC")
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlushService],
    }).compile();

    service = module.get<FlushService>(FlushService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('when evaluate method is called', () => {
    it(`should return true when a ${Category.FLUSH} is detected`, () => {
      const result = service.evaluate(cardsWithFlush);
      expect(result.length).toBe(1);
    });
    
    it(`should return false when no ${Category.FLUSH} is detected`, () => {
      const result = service.evaluate(cardsWithoutFlush);
      expect(result.length).toBe(0);
    });
    
    it('should return false when cardpool is empty', () => {
      const result = service.evaluate([]);
      expect(result.length).toBe(0);
    });
  });
});
