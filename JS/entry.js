// const Game = require("./game");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("background");
  const ctx = canvasEl.getContext("2d");
  var bg = new Image();
  bg.src = './docs/Untitled.png';
  bg.onload = () => {

    ctx.drawImage(bg,0,0);
  };

});
