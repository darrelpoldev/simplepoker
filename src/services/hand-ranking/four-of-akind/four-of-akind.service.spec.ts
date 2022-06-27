import { Test, TestingModule } from '@nestjs/testing';
import { FourOfAkindService } from './four-of-akind.service';

describe('FourOfAkindService', () => {
  let service: FourOfAkindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FourOfAkindService],
    }).compile();

    service = module.get<FourOfAkindService>(FourOfAkindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
