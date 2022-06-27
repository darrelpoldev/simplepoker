import { Test, TestingModule } from '@nestjs/testing';
import { FlushService } from './flush.service';

describe('FlushService', () => {
  let service: FlushService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlushService],
    }).compile();

    service = module.get<FlushService>(FlushService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
