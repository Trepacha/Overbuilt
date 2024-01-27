
# Overbuilt
This is an arcade-style city building game where your goal is to meet demands before citizens get too angry.
## Demands
Similar to Cities: Skylines, there are 3 types of demands

 - Residential (measuring unit - families)
	 - Low Density - 1 household
	 - High Density - 5 to 10 households (depends on the building size)
 - Commercial (measuring unit - businesses)
 - Industrial (measuring unit - businesses)

A demand has a max value, which is determined by the difficulty. Upon reaching that max value a timer is triggered, which is also determined by the difficulty and if the timer reaches 0 before the demand is dealt with, the game is over and your score is your total population
## Challenges
The challenge of this game is the little area the player has to build buildings. In Normal difficulty and above, an added challenge is the happiness meter. If said meter reaches 0, the player has a limited time to bring it back up. If they fail to do so, the game ends.
## Difficulties
### Easy
 - Demand meter
 - Easy to meet demands
 - Big starting bonus
### Normal
 - Demand meter
 - Relatively normal demands
 - Sizeable starting bonus
 - Happiness meter - passive increase, minor decrease on building destroy, increase by building entertainment
### Hard
 - Demand meter
 - Higher than normal demands
 - Acceptable starting bonus
 - Happiness meter - passive decrease, major decrease on building destroy, increase by building entertainment
### Challenge
 - Demand meter, residential demand is split into high and low density
 - Demand stays the same as Hard, but tends to prefer low density, which can become a problem with space
 - Very low starting bonus
 - Happiness meter - rapid passive decrease, low decrease on high density building destroy and high decrease on low density building destroy, increase by building entertainment
 - Happiness impacted by building size
   - Bigger Low Density Residential buildings give more happiness
   - Smaller High Density Residential building take less happiness
### Custom
 - Allows the user to enable or disable any elements of the challenges mentioned above
 - Allows the user to also pick from new, sandbox-like elements. Those include
	 - Infinite money 
	 - No demands
	 - All land unlocked
 - Scores do not save
 ## Money
 Money is important to building any city. In this instance, money becomes yet another challenge to the player.
 ### Starting bonus
 The player begins with a sum so that they can get their city running and then receive income from taxing citizens
 ### Taxes
 (This applies to every difficulty except easy)
 In the economy sidebar tab, the user will be able to increase or decrease taxes, which will have an impact on happiness, but is an easy way to get money
 ### Loans
 A loan can always be withdrawn from the economy tab. Doing this will impact your score negatively depending on the size of the loan
 ### Out of money
 If you ever run out of money and are on a negative income, the game will ask you whether you want to take a loan to continue playing by taking a loan or end the game and save your score.
 ## Structures
 You might be wondering whether there is a city without electricity, plumbing, police, fire department, garbage collection and so on. Well, this game will not require these to be built, because it would be too much of an impact on the already limited money of the player. There will be 2 types of buildings: roads and monuments.
 - Roads
 There is no need to manage traffic, but nobody ever declined a bit of variety
   - Two-lane two-way road
   - Four-lane two-way road
 - Monuments
 These are special buildings which indicate a player's complete mastery of any difficulty, but before they can be purchased, they require a certain population. If one is purchased, an icon appears next to the difficulty in the difficulty select screen
   - Easy - 45000$ and 4500 population (don't forget, they don't have a happiness meter)
   - Normal - 30000$ and 3000 population
   - Hard - 20000$ and 2000 population
   - Challenge - 20000$ and 2500 population
 ## Score Calculation
 Score is essential to any arcade-style game. Here is how it is calculated:
 Population - (dollars of loans taken/100)*2
