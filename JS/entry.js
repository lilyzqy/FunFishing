const Game = require("./game");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.querySelector("canvas");
  const ctx = canvasEl.getContext("2d");

  const game = new Game(ctx);
    window.addEventListener("keyup",game.pressButton.bind(game));

});
