import GameView from './game_view';
import Wave from './wave';
import Timer from './timer';

document.addEventListener("DOMContentLoaded", () => {
  const gamecanvasEl = document.getElementById("game-canvas");
  const ctx = gamecanvasEl.getContext("2d");
  const boardcanvasEl = document.getElementById("board-canvas");
  boardcanvasEl.style.visibility = "hidden";

  const wave = new Wave(ctx);
  wave.draw();
  wave.update();
  const timer = new Timer(ctx);
  timer.update();
  const gameView = new GameView(ctx,wave,timer);
  gameView.ready();
  window.addEventListener("keyup",gameView.pressButton.bind(gameView));
});
