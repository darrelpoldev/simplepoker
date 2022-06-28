import { Test, TestingModule } from '@nestjs/testing';
import Card from '@models/Card';
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

  describe('when player one has the winning hand', () => {
    const playerOneCard: Card[] = [
      new Card("AH"),
      new Card("TH"),
      new Card("JH"),
      new Card("QH"),
      new Card("KH")
    ];
  
    const playerTwoCards: Card[] = [
      new Card("8H"),
      new Card("2S"),
      new Card("KH"),
      new Card("QD"),
      new Card("JC")
    ];

    it('should declare player one as the winner', () => {
      
    });
  });

});
