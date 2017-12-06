/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(2);
// const ImageRepository = require("./image_repository");
// const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.querySelector("canvas");
  const ctx = canvasEl.getContext("2d");

  const game = new Game(ctx);
    window.addEventListener("keyup",game.pressButton.bind(game));
});


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Wire = __webpack_require__(3);
const EnergyBar = __webpack_require__(4);

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.on = false;
  }

  start(){
    this.wire = new Wire(this.ctx,40,40,300,150);
    this.energyBar = new EnergyBar(this.ctx,this.on);
    this.draw();

    this.update();
  }

  pressButton(e){
    if(this.on && e.code === "Space"){
      this.wire.pullBack();
      this.energyBar.getStress();
    }else if(!this.on && e.code === "Enter"){
      this.start();
      this.on = true;
    }
  }

  update(){
    this.wire.update();
    if(this.on){
      this.energyBar.forWireStrenth();
    }else{
      this.energyBar.reset();
    }
    this.draw();
    this.gameGoing = window.requestAnimationFrame(this.update.bind(this));
    this.mayEndGame();
  }

  draw(){
    this.ctx.clearRect(0,0,400,300);
    this.wire.draw();
    this.energyBar.draw();
  }

  mayEndGame(){
    if(this.wire.startX > this.wire.endX || this.wire.endX > 400 ||this.energyBar.X < 42){
      this.on = false;
      window.cancelAnimationFrame(this.gameGoing);
    }
  }

}

module.exports = Game;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Wire {
  constructor(ctx,startX, startY, endX, endY){
    this.ctx = ctx;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
  }

  draw(){
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.beginPath();
    this.ctx.moveTo( this.startX, this.startY);
    this.ctx.lineTo( this.endX, this.endY);
    this.ctx.stroke();
  }

  fishRunAway(){
    this.endX += 0.5;
  }

  pullBack(){
    this.endX -= 10;
  }

  update(){
    this.fishRunAway();
  }
}

module.exports = Wire;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class EnergyBar {
  constructor(ctx,gameStatus){
    this.ctx = ctx;
    this.type = gameStatus ? "energy" : "wire";
    this.X = 42;
    this.Y = 274;
    this.img = new Image();
    this.img.src = "docs/energybar.png";
  }

  update(){
    if(this.type === "energy"){
      this.forEnergy();
    }else{
      this.forWireStrenth();
    }
  }

  draw(){
      this.ctx.drawImage(this.img, this.X, this.Y);
  }

  forEnergy(){
    let addOn = 0;
    if(addOn < 90){
      addOn += 1;
      this.X += addOn;
    }
  }

  forWireStrenth(){
    if(this.X < (42+90)){
    this.X += 0.5;
    }
  }

  getStress(){
    if(this.X > 42){
      this.X -= 6;  
    }
  }

  reset(){
    this.X = 42;
    this.Y = 274;
  }
}


module.exports = EnergyBar;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map