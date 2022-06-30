import Hand from '@/models/Hand';
import PlayResponse from '@/models/PlayResponse';
import { Injectable } from '@nestjs/common';
import { CardService } from '../card/card.service';
import { EvaluateHandService } from '../evaluate-hand/evaluate-hand.service';

@Injectable()
export class DeciderService {
    
    constructor(private evaluateHandService: EvaluateHandService, private cardService: CardService) {}

    public run(playerOneCardsArray: string[], playerTwoCardsArray: string[]): PlayResponse {
        const playResponse = new PlayResponse();
        try {
            const playerOneCards = this.cardService.convertfromArrayString(playerOneCardsArray);
            const playerTwoCards = this.cardService.convertfromArrayString(playerTwoCardsArray);    
            const playerOneHand = new Hand(playerOneCards, 'PLAYER 1');
            const playerTwoHand = new Hand(playerTwoCards, 'PLAYER 2');
            if (playerOneHand.HasInvalidCards) {
                playResponse.message = `Invalid cards for ${playerOneHand.owner}. ${playerOneHand.InvalidCardString}`;
            } else if (playerTwoHand.HasInvalidCards) {
                playResponse.message = `Invalid cards for ${playerTwoHand.owner}. ${playerTwoHand.InvalidCardString}`;
            }
            else {
                const result = this.evaluateHandService.decide(playerOneHand, playerTwoHand);
                if (result.winningHand) {
                    const winningCards = result.winningCardString;
                    const handRank = result.winningHand.HighestHandCategory.category;
                    playResponse.message = `${winningCards} : ${handRank} by ${result.playerName}`;
                }
                else {
                    playResponse.message = `It's a tie!`;
                }
            }
        } catch (error) {
            playResponse.message = `Something went wrong. Probably related to the payload ${error}`
        }
        return playResponse;
    }
}
