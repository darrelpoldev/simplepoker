import { Test, TestingModule } from '@nestjs/testing';
import { HighCardService } from './high-card.service';

describe('HighCardService', () => {
  let service: HighCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HighCardService],
    }).compile();

    service = module.get<HighCardService>(HighCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
