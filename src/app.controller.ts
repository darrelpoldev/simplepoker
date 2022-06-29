import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Card from '@models/Card';
import Hand from '@models/Hand';
import { EvaluateHandService } from '@services/evaluate-hand/evaluate-hand.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly evaluatehandService: EvaluateHandService) {
    const playerOneCards = [
      new Card("2D"), 
      new Card("3S"), 
      new Card("4H"), 
      new Card("1C"), 
      new Card("6D")
    ];

    const playerTwoCards = [
      new Card("2S"), 
      new Card("3D"), 
      new Card("3C"), 
      new Card("5D"), 
      new Card("6H")
    ];
    const playerOneHand = new Hand(playerOneCards, "Player 1");
    const playerTwoHand = new Hand(playerTwoCards, "Player 2");
    const result = this.evaluatehandService.decide(playerOneHand, playerTwoHand);
    console.log(result);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
