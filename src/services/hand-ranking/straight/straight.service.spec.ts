import { Test, TestingModule } from '@nestjs/testing';
import { StraightService } from './straight.service';

describe('StraightService', () => {
  let service: StraightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StraightService],
    }).compile();

    service = module.get<StraightService>(StraightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
