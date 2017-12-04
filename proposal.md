# FunFishing - A Pixel Looking Fishing Game

## BackGround and Overview
FunFishing is a simple arcade fishing game, with the purpose of fishing as heavy as possible within 30 seconds. The steps are simple:
1. Hit the energy bar to select the right amount of power to cast the fishing rod  
2. When the fishing rod gets shaking, press the specific button as instructed to pull the rod, if pressing too quick, the fishing line will be broken; if pressing too slow, the fish will escape.
3. when the fish is pulled, it will show the scale of the fish and added to your record on the top of the screen.

This game requires gamer to have the right strategy, good skills and a bit of luck.

Strategy: game should fish the heavier the better within given time, and the strategy is use more power to fish in the deeper part of the sea
Skills: heavier fish requires more skill to be pulled and smaller fishes are easier to be pulled
Luck: although further away from the shore, the heavier the fish would be, the actual scale of the fish would still be relatively random.
## Functionality and MVP

In FunFishing, player will be able to:
1. press space to select the power to cast the fishing rod  
2. press left to pull the rod when it's shaking (when there's fish gets hooked)
3. press left repeatedly to pull the rod until the fish is caught

In addition, the project will include:
1. Tutorial to walk through first time gamers
2. Record board showing the current number and scale of fishes
3. a 30 seconds count down timer
## Wireframes

The game will consist of a single screen with a fisherman fishing with rod on the shore next to the sea. On top of the screen, from left to right, it will show the current number of fishes caught, the current total weight of fishes caught and the current remaining time. At the bottom of the screen, from left to right, it will show the energy bar and the tutorial button.

![wireframes](https://github.com/lilyzqy/FunFishing/blob/master/New%20Mockup%201.png)

## Architecture and Technologies

This project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure and game logic,
* HTML5 Canvas for DOM manipulation and rendering,
* Webpack to bundle and serve up the various scripts.
* In addition to the webpack entry file, there will be four scripts involved in this project:

`board.js` : this script will handle the logic for creating and updating the necessary DOM elements.


## Implementation Timeline

### Day 1:
Setup all necessary files, get webpack set up and running. Create webpack.config.js as well as package.json. Write a basic entry file and the bare bonesLearn.

### Day 2:
Get the basic game logic set up, including the game view. Create all the objects in the game.
### Day 3:
Keep working on the objects and get the game working.
### Day 4:
Finish all the game objects and create the tutorial.
