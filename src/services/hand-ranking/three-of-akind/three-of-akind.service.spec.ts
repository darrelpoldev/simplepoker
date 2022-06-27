import { Test, TestingModule } from '@nestjs/testing';
import { ThreeOfAkindService } from './three-of-akind.service';

describe('ThreeOfAkindService', () => {
  let service: ThreeOfAkindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreeOfAkindService],
    }).compile();

    service = module.get<ThreeOfAkindService>(ThreeOfAkindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
