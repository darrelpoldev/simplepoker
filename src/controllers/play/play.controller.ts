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
            playResponse = this.deciderService.run(playRequest.playerOneCards, playRequest.playerTwoCards);
        } catch (error) {
            playResponse.message = `Something went wrong. Probably related to the payload ${error}`
        }
        return playResponse;
    }


}
