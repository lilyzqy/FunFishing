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


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Wire = __webpack_require__(3);

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.wire = new Wire(ctx,40,40,300,150);

  }

  update(){
    this.wire.fishRunAway();
    this.draw();
    window.requestAnimationFrame(this.update.bind(this));
  }

  draw(){
    this.ctx.clearRect(0,0,400,300);
    this.wire.draw();
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
    this.ctx.beginPath();
    this.ctx.moveTo( this.startX, this.startY);
    this.ctx.lineTo( this.endX, this.endY);
    this.ctx.stroke();
  }

  fishRunAway(){
    this.endX += 1;
  }
}

module.exports = Wire;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map