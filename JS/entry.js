const GameView = require("./game_view");
// const ImageRepository = require("./image_repository");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.querySelector("canvas");
  const ctx = canvasEl.getContext("2d");
  document.querySelector("h2").style.visibility = "hidden";
  document.getElementById("board").style.visibility = "hidden";
  document.getElementById("fish").style.visibility = "hidden";
  document.getElementById("escape").style.visibility = "hidden";
  document.getElementById("broken").style.visibility = "hidden";

  const gameView = new GameView(ctx);
  gameView.ready();
  window.addEventListener("keyup",gameView.pressButton.bind(gameView));
});
