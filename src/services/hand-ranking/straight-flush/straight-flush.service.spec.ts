import { Test, TestingModule } from '@nestjs/testing';
import { StraightFlushService } from './straight-flush.service';

describe('StraightFlushService', () => {
  let service: StraightFlushService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StraightFlushService],
    }).compile();

    service = module.get<StraightFlushService>(StraightFlushService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
