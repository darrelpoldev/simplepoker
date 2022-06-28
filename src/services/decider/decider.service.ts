import { Injectable } from '@nestjs/common';
import Hand from '@models/Hand';
import HandCategory from '@models/HandCategory';
import Result from '@models/Result';

@Injectable()
export class DeciderService {

    public evaluate(handOne: Hand, handTwo: Hand): Result {
        const handOnePossibleCategories = handOne.possibleHandCategories.sort(HandCategory.sort);
        const handTwoPossibleCategories = handTwo.possibleHandCategories.sort(HandCategory.sort);
        const handOneHighestRankingCategory = handOnePossibleCategories[0];
        const handTwoHighestRankingCategory = handTwoPossibleCategories[0];
        handOne.highestHandCategory = handOneHighestRankingCategory; // TODO: Use getter and setter
        handTwo.highestHandCategory = handTwoHighestRankingCategory; // TODO: Use getter and setter
        console.log(handOne);
        console.log(handTwo);
        //  TODO: IMPROVE THIS DAMN CODE
        if (handOne.highestHandCategory.rank > handTwo.highestHandCategory.rank) {
            return new Result(handOne);
        }
        else if (handTwo.highestHandCategory.rank > handOne.highestHandCategory.rank) {
            return new Result(handTwo);
        }
        else {
            if (handOne.highestRankingCard.rank > handTwo.highestRankingCard.rank) {
                return new Result(handOne);
            }
            else if (handTwo.highestRankingCard.rank > handOne.highestRankingCard.rank) {
                return new Result(handTwo);
            }
            else {
                console.log(`Can't event decide by High Card. Split the Pot? :P`)
                return null;
            }
        }
    }
}
