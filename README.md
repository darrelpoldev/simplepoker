## TO RUN THIS APPLICATION

1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. If everything is okay, server should now be running at `http://localhost:3000`

###### HOW TO EVALUATE CARDS

I created an endpoint to capture the inputs

1. `POST /play`
   - This endpoint accepts the following payload
   ```
   {
     "playerOneCards": [ "TD", "TS", "7H", "AS", "9C"],
     "playerTwoCards": [ "TD", "2D", "2S", "7H", "JC"]
   }
   ```
   - Once submitted, it should respond something like this
   ```
   {
     "message": "AS,TD,TS,9C,7H : ONE_PAIR by PLAYER 1"
   }
   ```
   :bulb: As a bonus, I created a `GET /play` that randomly builds a random hands from a prebuilt deck and tells you who won.
   :bulb: You can use POSTMAN to play with these endpoints.

###### Wanna go directly to the code?

[START HERE](https://github.com/poldarreldev/simplepoker/blob/main/src/services/evaluate-hand/evaluate-hand.service.ts#L42)

###### PSEUDO CODE when deciding who has higher ranking card

1. Create the "Hand" object from the cards.
2. Assume that all cards has a "HIGH_CARD" category
3. Sort cards by its highest ranking card
4. Build all possible hand categories (e.g. one pair, two pair, etc.)
5. Sort categories by its highest ranking category
6. Combine the "Hand(s)" from the players to create an array of "Hand(s)"
7. Sort the array of "Hand(s)" base on the highest ranking category.
8. If possible category is only "HIGH_CARD" and both highest ranking card has the same rank, it's a TIE.
9. If possible category is only "HIGH_CARD" and NOT A TIE. Then decide the winner by its highest ranking card.
10. If it's not decided by highest ranking card, the top of the sorted array of "Hand(s)" is the WINNER.

###### TODO LIST

- [x] Understand hand rankings
- [x] Determine the rank of a hand
  - [x] **Key Notes**
    - [x] **Always sort cards by the highest possible rank**
    - [x] **Always determine the occurence of a particular**
  - [x] find highest possible hand rank. determine hands by
    - [x] high card
    - [x] one pair
      - [x] What if both players has a pair, how do you evaluate the kicker? - Use the highest ranking card as a kicker
    - [x] two pair
    - [x] three of a kind
    - [x] straight
    - [x] flush
    - [x] full house
    - [x] four of a kind
    - [x] straight flush
  - [x] create a logic to determine what kind of hand is provided
- [x] Enable comparison of 2 hands. show who wins.
  - [x] get possible hand categories
  - [x] sort possible hand categories
  - [x] get highest ranking categories
  - [x] compare each highest ranking
  - [x] if tie, check highest card ranking
- [x] Fix path alias
- [x] Create Test Scenarios
  - [x] Scenarios per hand ranks
  - [x] Scenarios per Hand
  - [x] Scenarios during decider
- [x] Add more unit tests?
- [x] Refactor
- [x] Add GET /play endpoint
  - [x] Randomize 2 five hands and decide the winner
- [x] Add POST /play endpoint
  - [x] Allow user to add 2 five cards and respond with the card's winner
