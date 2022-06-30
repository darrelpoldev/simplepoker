import Hand from '@/models/Hand';
import { PlayPayload } from '@/models/interfaces/PlayPayload';
import PlayResponse from '@/models/PlayResponse';
import { CardService } from '@/services/card/card.service';
import { EvaluateHandService } from '@/services/evaluate-hand/evaluate-hand.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import e from 'express';

@Controller('play')
export class PlayController {

    constructor(private cardService: CardService, private evaluateHandService: EvaluateHandService) {

    }
    
    @Get()
    play() {
        return 'get random 2 five hands and decide who won';
    }

    @Post()
    public playAndDecide(@Body() playRequest: PlayPayload) : PlayResponse {
        const playResponse = new PlayResponse();
        try {
            const playerOneCards = this.cardService.fromArrayString(playRequest.playerOneCards);
            const playerTwoCards = this.cardService.fromArrayString(playRequest.playerTwoCards);    
            const playerOneHand = new Hand(playerOneCards, 'PLAYER 1');
            const playerTwoHand = new Hand(playerTwoCards, 'PLAYER 2');
            if (playerOneHand.InvalidCards.length > 0) {
                playResponse.message = `Invalid cards for ${playerOneHand.owner}. ${playerOneHand.InvalidCards.map(card => `${card.value}${card.suit}`)}`;
            } else if (playerTwoHand.InvalidCards.length > 0) {
                playResponse.message = `Invalid cards for ${playerTwoHand.owner}. ${playerTwoHand.InvalidCards.map(card => `${card.value}${card.suit}`)}`;
            }
            else {
                const result = this.evaluateHandService.decide(playerOneHand, playerTwoHand);
                if (result.winningHand) {
                    const winningCards = result.winningCards.map(card => `${card.value}${card.suit}`);
                    const handRank = result.winningHand.HighestHandCategory.category;
                    playResponse.message = `${winningCards} - ${handRank} by ${result.playerName}`;
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
