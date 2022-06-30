import { PlayPayload } from '@/models/interfaces/PlayPayload';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('play')
export class PlayController {
    
    @Get()
    play() {
        return 'get random 2 five hands and decide who won';
    }

    @Post()
    public playAndDecide(@Body() playRequest: PlayPayload) {
        console.log('player 1', playRequest.playerOneCards);
        console.log('player 2', playRequest.playerTwoCards);
    }


}
