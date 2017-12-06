const Game = require("./game");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.querySelector("canvas");
  const ctx = canvasEl.getContext("2d");

  const bg = new Image();
  bg.src = './docs/Untitled.png';
  const game = new Game(ctx);
  bg.onload = () => {
    // ctx.drawImage(bg,0,0);
    game.draw();
    game.update();
  };

});
