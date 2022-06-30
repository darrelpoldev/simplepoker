import Hand from '@/models/Hand';
import { PlayPayload } from '@/models/interfaces/PlayPayload';
import PlayResponse from '@/models/PlayResponse';
import { CardService } from '@/services/card/card.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('play')
export class PlayController {

    constructor(private cardService: CardService) {

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
            const playerOneHand = new Hand(playerOneCards, 'player 1');
            const playerTwoHand = new Hand(playerTwoCards, 'player 2');
            if (playerOneHand.InvalidCards.length > 0) {
                playResponse.message = `Invalid cards for ${playerOneHand.owner}. ${playerOneHand.InvalidCards.map(card => `${card.value}${card.suit}`)}`;
            } else if (playerTwoHand.InvalidCards.length > 0) {
                playResponse.message = `Invalid cards for ${playerOneHand.owner}. ${playerOneHand.InvalidCards.map(card => `${card.value}${card.suit}`)}`;
            }
            else {
                playResponse.message = 'all cards are valid';
            }

        } catch (error) {
            playResponse.message = `Something went wrong. Probably related to the payload ${error}`
        }
        return playResponse;
    }


}
