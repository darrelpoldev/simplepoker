import Hand from '@/models/Hand';
import { PlayPayload } from '@/models/interfaces/PlayPayload';
import { ShuffledCardsResponse } from '@/models/interfaces/ShuffledCardsResponse';
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
    
    //  INFO: PLEASE IGNORE THIS. I JUST CREATED THIS FOR MY OWN SAKE 'COZ I'M lazy thinking random cards. Thanks.
    @Get()
    play() {
        let play = new PlayResponse();
        let response: ShuffledCardsResponse = {
            message: '',
            playerOneCards: [],
            playerTwoCards: []
        };
        try {
            const randomCardsForPlayerOne = this.cardService.getRandomCards(5);
            const randomCardsForPlayerTwo = this.cardService.getRandomCards(5);
            play = this.deciderService.run(randomCardsForPlayerOne, randomCardsForPlayerTwo);
            response.playerOneCards = randomCardsForPlayerOne;
            response.playerTwoCards = randomCardsForPlayerTwo;
            response.message = play.message;
        } catch (error) {
            response.message = `Something went wrong. Probably related to the payload ${error}`
        }
        return response;
    }
}
