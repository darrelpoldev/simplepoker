import Hand from '@/models/Hand';
import { PlayPayload } from '@/models/interfaces/PlayPayload';
import PlayResponse from '@/models/PlayResponse';
import { CardService } from '@/services/card/card.service';
import { DeciderService } from '@/services/decider/decider.service';
import { EvaluateHandService } from '@/services/evaluate-hand/evaluate-hand.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import e from 'express';

@Controller('play')
export class PlayController {

    constructor(private cardService: CardService, private deciderService: DeciderService) {

    }
    
    @Get()
    play() {
        return 'get random 2 five hands and decide who won';
    }

    @Post()
    public playAndDecide(@Body() playRequest: PlayPayload) : PlayResponse {
        let playResponse = new PlayResponse();
        try {
            const playerOneCards = this.cardService.fromArrayString(playRequest.playerOneCards);
            const playerTwoCards = this.cardService.fromArrayString(playRequest.playerTwoCards);    
            const playerOneHand = new Hand(playerOneCards, 'PLAYER 1');
            const playerTwoHand = new Hand(playerTwoCards, 'PLAYER 2');
            playResponse = this.deciderService.run(playerOneHand, playerTwoHand);
        } catch (error) {
            playResponse.message = `Something went wrong. Probably related to the payload ${error}`
        }
        return playResponse;
    }


}
