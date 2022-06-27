import { Test, TestingModule } from '@nestjs/testing';
import { OnePairService } from './one-pair.service';

describe('OnePairService', () => {
  let service: OnePairService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnePairService],
    }).compile();

    service = module.get<OnePairService>(OnePairService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
