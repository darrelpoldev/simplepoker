import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Card from './models/Card';
import Hand from './models/Hand';
import { EvaluateHandService } from './services/evaluate-hand/evaluate-hand.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly evaluatehandService: EvaluateHandService) {
    const playerOneCards = [
      new Card("AD"), 
      new Card("AD"), 
      new Card("AD"), 
      new Card("AD"), 
      new Card("KS")
    ];
    const playerOneHand = new Hand(playerOneCards, "Player 1");
    evaluatehandService.hand = playerOneHand;
    evaluatehandService.run();

    const playerTwoCards = [
      new Card("TD"), 
      new Card("AD"), 
      new Card("JD"), 
      new Card("QD"), 
      new Card("KD")
    ];

    const playerTwoHand = new Hand(playerTwoCards, "Player 2");
    evaluatehandService.hand = playerTwoHand;
    evaluatehandService.run();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
