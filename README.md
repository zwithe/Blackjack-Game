# Blackjack-Game
Green texture from freepik.com
The goal of the game is to have a hand with a total value closer to 21 than the dealer's hand, without exceeding 21. Here are the basic rules of blackjack:

Card Values: In blackjack, each card has a specific value. Numbered cards (2-10) are worth their face value. Face cards (Jack, Queen, and King) are worth 10 points each. The Ace can be worth either 1 or 11 points, depending on the player's choice. My game calculates aces automatically so they will never bust you if you chose to read it as an 11.

The Initial Deal: The game begins with the dealer dealing two cards to each player, including themselves. Both of the player's cards are dealt face-up, while one of the dealer's cards is face-up and the other is face-down.

Player's Turn: The player plays their hand first and has several options:

Hit: The player can request an additional card by pressin the hit button. They can take as many hits as they like until they decide to stand or their hand exceeds 21 (busts).

Stand: If the player is satisfied with their hand and believes it's strong enough to beat the dealer, they can choose to stand. This means they don't take any more cards and it's now the dealer's turn.

Double Down: Double the inital bet and take exactly one more card.

Surrender: The player gives up the current hand in exchange for half their bet back.

Dealer's Turn: Once the players have completed their turns, it's the dealer's turn to play. The dealer reveals their face-down card.

Dealer's Rule: The dealer must follow a specific rule known as "dealer's rule" or "house rule.". If the dealer's hand value is 16 or less, they must hit. If the dealer's hand value is 17 or more, they must stand.
Determining the Winner: After the dealer completes their turn, the hands are compared to determine the winner. Here are the possible outcomes:

If the player's hand exceeds 21, they bust and lose their bet.
If the player's hand value is closer to 21 than the dealer's without exceeding 21, the player wins and receives a payout equal to their bet.
If the player and the dealer have the same hand value, it's a tie or push, and the player's bet is returned.
If the dealer's hand is closer to 21 than the player's without exceeding 21, the player loses their bet.
Blackjack: If a player's first two cards are an Ace and a 10-value card (10, Jack, Queen, or King), they have a "blackjack." This is the strongest hand in the game and pays out 3 to 2.








Dev woes not reqired reading:
This is my first full project from scratch! I had 2 weeks. The hardest part was practicing D.R.Y. things like copy paste, functions, control shift l, and multi cursor make repition so easy. I wanted to do so much more! I wanted a split fuction! I wanted a little leaderboard of the local high score (longest lasted with 2500$). I wanted a see optimal play function that would show you what you would do following basic strategy. I might come back and work on these later. I have a bunch of functions that all they do is call other fuctions. I'm not sure if that's the best way of doing things. It kinda just worked out with the way I wrote certian things needed multiple functions to be called. Ids are mostly used over classes beacause javascript needs to target those items seprately even if the styling is similar.
