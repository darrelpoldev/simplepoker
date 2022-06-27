import { Injectable } from '@nestjs/common';
import Hand from 'src/models/Hand';
import HandCategory from 'src/models/HandCategory';

@Injectable()
export class DeciderService {

    public evaluate(handOne: Hand, handTwo: Hand) {
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
            console.log(`Winner Player 1 ${handOne.highestHandCategory.category}`, handOne.cardPool);
        }
        else if (handTwo.highestHandCategory.rank > handOne.highestHandCategory.rank) {
            console.log(`Winner Player 2 ${handTwo.highestHandCategory.category}`, handTwo.cardPool);
        }
        else {
            console.log(`It's a tie! Deciding by high card`);
            if (handOne.highestRankingCard.rank > handTwo.highestRankingCard.rank) {
                console.log(`Winner Player 1 by High Card '${handOne.highestRankingCard.value}${handOne.highestRankingCard.suit}'`, handOne.cardPool);
            }
            else if (handTwo.highestRankingCard.rank > handOne.highestRankingCard.rank) {
                console.log(`Winner Player 2 by High Card '${handTwo.highestRankingCard.value}${handTwo.highestRankingCard.suit}'`, handTwo.cardPool);
            }
            else {
                console.log(`Can't event decide by High Card. Split the Pot? :P`)
            }
        }
    }
}
