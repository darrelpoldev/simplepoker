import { Test, TestingModule } from '@nestjs/testing';
import { DeciderService } from './decider.service';

describe('DeciderService', () => {
  let service: DeciderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeciderService],
    }).compile();

    service = module.get<DeciderService>(DeciderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
