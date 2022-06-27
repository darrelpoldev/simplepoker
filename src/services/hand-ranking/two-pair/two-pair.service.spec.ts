import { Test, TestingModule } from '@nestjs/testing';
import { TwoPairService } from './two-pair.service';

describe('TwoPairService', () => {
  let service: TwoPairService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwoPairService],
    }).compile();

    service = module.get<TwoPairService>(TwoPairService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
