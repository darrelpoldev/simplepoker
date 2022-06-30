import Hand from '@/models/Hand';
import PlayResponse from '@/models/PlayResponse';
import { Injectable } from '@nestjs/common';
import { EvaluateHandService } from '../evaluate-hand/evaluate-hand.service';

@Injectable()
export class DeciderService {
    
    constructor(private evaluateHandService: EvaluateHandService) {}

    public run(playerOneHand: Hand, playerTwoHand: Hand): PlayResponse {
        const playResponse = new PlayResponse();
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
        return playResponse;
    }
}
