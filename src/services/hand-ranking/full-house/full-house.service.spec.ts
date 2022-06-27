import { Test, TestingModule } from '@nestjs/testing';
import { FullHouseService } from './full-house.service';

describe('FullHouseService', () => {
  let service: FullHouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FullHouseService],
    }).compile();

    service = module.get<FullHouseService>(FullHouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
