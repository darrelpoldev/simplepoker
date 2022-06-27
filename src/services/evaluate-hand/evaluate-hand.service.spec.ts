import { Test, TestingModule } from '@nestjs/testing';
import { EvaluateHandService } from './evaluate-hand.service';

describe('EvaluateHandService', () => {
  let service: EvaluateHandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluateHandService],
    }).compile();

    service = module.get<EvaluateHandService>(EvaluateHandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
