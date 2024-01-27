# Overbuilt
This is an arcade-style city building game where your goal is to meet demands before citizens get too angry.
## Demands
Similar to Cities: Skylines, there are 3 types of demands

 - Residential (measuring unit - families)
	 - Low Density - 1 household
	 - High Density - 5 to 10 households (depends on the building size)
 - Commercial (measuring unit - businesses)
 - Industrial (measuring unit - businesses)

A demand has a max value, which will be determined by the difficulty. Upon reaching that max value a timer is triggered, which is also determined by the difficulty and if the timer reaches 0 before the demand is dealt with, the game is over and your score is your total population
## Challenges
The challenge of this game is the little area the player has to build buildings. In Normal difficulty and above, an added challenge is the happiness meter. If said meter reaches 0, the player has a very limited time to bring it back up before the game is over
## Difficulties
### Easy
 - Demand meter
 - Easy to meet demands
### Normal
 - Demand meter
 - Relatively normal demands
 - Happiness meter - passive increase, minor decrease on building destroy, increase by building entertainment
### Hard
 - Demand meter
 - Higher than normal demands
 - Happiness meter - passive decrease, major decrease on building destroy, increase by building entertainment
### Challenge
 - Demand meter, residential demand is split into high and low density
 - Demand stays the same as Hard, but tends to prefer low density, which can become a problem with space
 - Happiness meter - rapid passive decrease, low increase on high density building destroy and high decrease on low density building destroy, increase by building entertainment
### Custom
 - Allows the user to enable or disable any elements of the challenges mentioned above
 - Allows the user to also pick from new, sandbox-like elements. Those include
	 - Infinite money 
	 - No demands
	 - All land unlocked
 - Scores do not save
