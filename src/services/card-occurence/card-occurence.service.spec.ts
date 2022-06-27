import { Test, TestingModule } from '@nestjs/testing';
import { CardOccurenceService } from './card-occurence.service';

describe('CardOccurenceService', () => {
  let service: CardOccurenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardOccurenceService],
    }).compile();

    service = module.get<CardOccurenceService>(CardOccurenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
