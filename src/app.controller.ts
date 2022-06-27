import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Card from './models/Card';
import Hand from './models/Hand';
import { DeciderService } from './services/decider/decider.service';
import { EvaluateHandService } from './services/evaluate-hand/evaluate-hand.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly evaluatehandService: EvaluateHandService, private readonly deciderService: DeciderService) {
    const playerOneCards = [
      new Card("2D"), 
      new Card("3S"), 
      new Card("4H"), 
      new Card("5C"), 
      new Card("6D")
    ];
    const playerOneHand = new Hand(playerOneCards, "Player 1");
    evaluatehandService.hand = playerOneHand;
    evaluatehandService.run();

    const playerTwoCards = [
      new Card("2S"), 
      new Card("3D"), 
      new Card("4C"), 
      new Card("5D"), 
      new Card("6H")
    ];

    const playerTwoHand = new Hand(playerTwoCards, "Player 2");
    evaluatehandService.hand = playerTwoHand;
    evaluatehandService.run();
    const result = deciderService.evaluate(playerOneHand, playerTwoHand);
    
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
