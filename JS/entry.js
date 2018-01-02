import GameView from './game_view';
import Wave from './wave';
import Timer from './timer';
import Gamecover from './gamecover';

document.addEventListener("DOMContentLoaded", () => {
  const gamecanvasEl = document.getElementById("game-canvas");
  const ctx = gamecanvasEl.getContext("2d");
  const boardcanvasEl = document.getElementById("board-canvas");
  boardcanvasEl.style.visibility = "hidden";
  const covercanvasEl = document.getElementById("cover-canvas");
  covercanvasEl.style.visibility = "hidden";

  const wave = new Wave(ctx);
  wave.draw();
  wave.update();
  const timer = new Timer(ctx);
  const gamecover = new Gamecover();
  const gameView = new GameView(ctx,wave,timer,gamecover);
  gameView.ready();
  window.addEventListener("keyup",gameView.pressButton.bind(gameView));
});
