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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EnergyBar {
  constructor(ctx){
    this.ctx = ctx;
    this.X = 42;
    this.Y = 274;
    this.img = new Image();
    this.img.src = "images/energybar.png";
    this.moving = false;
    this.a = 2.5;
  }

  drawTitle(type){
    if(type === "Power"){
      this.ctx.font = "5px 'Press Start 2P',cursive";
      this.ctx.fillText("POWER",10,286);
    }else if (type === "Wire"){
      this.ctx.font = "5px 'Press Start 2P',cursive";
      this.ctx.fillText("WIRE", 10, 286);
    }
  }

  draw(){
    this.img.onload =()=>{
      this.ctx.drawImage(this.img, this.X, this.Y);
    };
    this.ctx.drawImage(this.img, this.X, this.Y);
  }

  updateForEnergy(){
    let min = 41;
    let max = 42+90;
    if(min < this.X < max){
      if(this.X < min || this.X === max){
        this.a *= -1;
      }
      this.X += this.a;
    }
  }

  updateForWireStrenth(){
    if(this.X < (42+90)){
    this.X += 0.5;
    }
  }

  getStress(){
    if(this.X > 42){
      this.X -= 8;
    }
  }

  reset(){
    this.X = 42;
    this.Y = 274;
  }

}


/* harmony default export */ __webpack_exports__["a"] = (EnergyBar);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wave__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer__ = __webpack_require__(9);




document.addEventListener("DOMContentLoaded", () => {
  const gamecanvasEl = document.getElementById("game-canvas");
  const ctx = gamecanvasEl.getContext("2d");
  const boardcanvasEl = document.getElementById("board-canvas");
  boardcanvasEl.style.visibility = "hidden";

  const wave = new __WEBPACK_IMPORTED_MODULE_1__wave__["a" /* default */](ctx);
  wave.draw();
  wave.update();
  const timer = new __WEBPACK_IMPORTED_MODULE_2__timer__["a" /* default */](ctx);
  timer.update();
  const gameView = new __WEBPACK_IMPORTED_MODULE_0__game_view__["a" /* default */](ctx,wave,timer);
  gameView.ready();
  window.addEventListener("keyup",gameView.pressButton.bind(gameView));
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__energy_bar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisherman__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__board__ = __webpack_require__(10);







class GameView{
  constructor(ctx,wave,timer){
    this.ctx = ctx;
    this.wave = wave;
    this.timer = timer;
  }

  ready(){
    this.energyBar = new __WEBPACK_IMPORTED_MODULE_0__energy_bar__["a" /* default */](this.ctx);
    this.fisherman = new __WEBPACK_IMPORTED_MODULE_2__fisherman__["a" /* default */](this.ctx);
    this.board = new __WEBPACK_IMPORTED_MODULE_4__board__["a" /* default */]();
    this.game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */](this.ctx,
                         this.fisherman,
                         this.wave,
                         this.timer,
                         this.board);
    this.draw();
  }

  pressButton(e){
    if(this.game.on && e.code === "Space"){
      this.game.pressButton(e);
    }else if (!this.energyBar.moving && !this.game.on && e.code === "Enter"){
      this.timer.on = true;
      this.timer.update();
      this.game.pressButton(e);
      this.board.boardcanvasEl.style.visibility = "hidden";
      this.board.ctx.clearRect(0,0,200,140);
      this.update();
      this.energyBar.moving = true;
    }else if(this.energyBar.moving && !this.game.on && e.code === "Enter"){
      window.cancelAnimationFrame(this.energyBarMoving);
      this.game.start(this.energyBar.X - 42);
      this.game.on = true;
      this.energyBar.moving = false;
    }
  }

  update(){
    this.draw();
    this.energyBar.updateForEnergy();
    this.energyBarMoving = window.requestAnimationFrame(this.update.bind(this));
  }

  draw(){
    this.ctx.clearRect(0,110,400,150);
    this.ctx.clearRect(0,270,400,30);
    this.timer.draw();
    this.energyBar.draw();
    this.energyBar.drawTitle("Power");
    this.fisherman.draw("ready");
  }

}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fish_wire__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__energy_bar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fish__ = __webpack_require__(8);




class Game {
  constructor(ctx,fisherman,wave,timer,board){
    this.ctx = ctx;
    this.on = false;
    this.fisherman = fisherman;
    this.wave = wave;
    this.timer = timer;
    this.board = board;
  }

  start(X){
    this.wire = new __WEBPACK_IMPORTED_MODULE_0__fish_wire__["a" /* default */](this.ctx,93,100+X*2.7);
    this.energyBar = new __WEBPACK_IMPORTED_MODULE_1__energy_bar__["a" /* default */](this.ctx);
    let weight = X*0.1+Math.random();
    if(X < 4.5){
      weight = X*0.01+Math.random();
    }
    this.fish = new __WEBPACK_IMPORTED_MODULE_2__fish__["a" /* default */](this.ctx, weight);
    this.draw();
    this.update();
    this.timer.update();
    window.setTimeout(()=>{
      this.wire.fishOn = true;
      this.youGotFish();
    }, Math.floor((Math.random() * 8) + 2)*1000);
  }

  youGotFish(){
    this.ctx.font = "20px 'Press Start 2P',cursive";
    this.ctx.fillText("!",60,140);
    setTimeout(() => {
        this.ctx.clearRect(0,110,200,30);
    }, 500);
  }

  pressButton(e){
    if(e.code === "Space" && this.wire.fishOn){
      this.wire.pullBack();
      this.energyBar.getStress();
      this.fisherman.pullBack();
    }else if(e.code === "Enter"){
      if(this.fish && this.fish.outOfWater){
        this.fish.outOfWater = false;
      }
    }
  }

  update(){
    if(this.on){
      if(this.wire.fishOn){
        this.wire.update();
      }
      this.energyBar.updateForWireStrenth();
      if(this.energyBar.X >= 65){
        this.wire.dangerous = true;
      }
    }else{
      this.energyBar.reset();
    }
    this.draw();
    this.gameGoing = window.requestAnimationFrame(this.update.bind(this));
    this.mayEndGame();
  }

  draw(){
    this.ctx.clearRect(0,140,400,120);
    this.ctx.clearRect(0,270,400,30);
    this.wire.draw(this.energyBar.X);
    this.energyBar.draw();
    this.energyBar.drawTitle("Wire");
    this.fisherman.draw("fishing");
  }

  mayEndGame(){
    if(this.wire.startX > this.wire.endX){
      this.board.draw("gotfish");
      this.endGame();
      this.fish.outOfWater = true;
      this.fish.update();
      this.fisherman.draw("gotfish");
    }else if( this.wire.endX > 400){
      this.board.draw("escape");
      this.endGame();
      this.fisherman.draw("broken");
    } else if(this.energyBar.X < 42){
      this.board.draw("broken");
      this.endGame();
      this.fisherman.draw("broken");
    }
  }

  endGame (){
    this.timer.on = false;
    this.ctx.clearRect(0,110,400,150);
    this.board.boardcanvasEl.style.visibility = "visible";
    this.on = false;
    window.cancelAnimationFrame(this.gameGoing);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Wire {
  constructor(ctx,startX, endX){
    this.ctx = ctx;
    this.startX = startX;
    this.endX = endX;
    this.fishOn = false;
    this.dangerous = false;
    this.fishImg = new Image();
    this.a = 1;
  }

  draw(X){
    if(X < 60 && this.dangerous){
      this.ctx.strokeStyle = "#f23413";
    }else{
      this.ctx.strokeStyle = "#ffffff";
    }
    this.ctx.beginPath();
    this.ctx.moveTo( this.startX, 142);
    this.ctx.lineTo( this.endX,259);
    this.ctx.stroke();
  }

  fishRunAway(){
    this.endX += 0.5;
  }

  pullBack(){
    this.startX = 82;
    this.endX -= 10;
    window.setTimeout(()=>{
      this.startX = 93;
    },800);
  }

  update(){
    this.fishRunAway();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Wire);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Fisherman {
  constructor(ctx){
    this.ctx = ctx;
    this.readyPosImg = new Image();
    this.readyPosImg.src = "images/readystance.gif";
    this.fishingPosImg = new Image();
    this.fishingPosImg.src = "images/fishingstance.png";
    this.gotfishPosImg = new Image();
    this.gotfishPosImg.src = "images/gotfishfisherman.png";
    this.brokenPosImg = new Image();
    this.brokenPosImg.src = "images/broken.png";
  }

  draw(pos){
    if(pos === "ready"){
    this.readyPosImg.onload = ()=>{
      this.drawReady();
    };
    this.drawReady();
    }else if (pos === "fishing"){
      this.ctx.drawImage(this.fishingPosImg, 50, 140);
    }else if (pos === "gotfish"){
      this.ctx.drawImage(this.gotfishPosImg, 55,136);
    }else if (pos === "broken"){
      this.ctx.drawImage(this.brokenPosImg,44,135);
    }
  }

  pullBack(){
    this.fishingPosImg.src = "images/pullstance-3.gif";
    window.setTimeout(()=>{
      this.fishingPosImg.src = "images/fishingstance.png";
    },800);
  }

  drawReady(){
    this.ctx.drawImage(this.readyPosImg, 26 , 148);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Fisherman);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Wave {
  constructor(ctx){
    this.ctx = ctx;
    this.X = 0;
    this.Y = 0;
    this.img = new Image();
    this.img.src = "images/wave.png";
    this.a = 0.1;
  }

  draw(){
      this.ctx.drawImage(this.img, this.X, this.Y);
  }

  move(){
    const min = -10;
    const max = 1.2;
    if( min < this.X < max){
      if(this.X < min || this.X > max){
        this.a *= -1;
      }
      this.X += this.a;
    }
  }

  update(){
    this.ctx.clearRect(0,260,400,10);
    this.move();
    this.draw();
    window.requestAnimationFrame(this.update.bind(this));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Wave);


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Fish{
  constructor(ctx,weight){
    this.ctx = ctx;
    this.weight = weight;
    console.log(weight);
    this.outOfWater = false;
    this.fishImg = new Image();
    this.a = 1;
  }

  weight(){

  }

  toggleFish(a){
    if(a === 1){
      this.fishImg.src = "images/gotfish3.png";
    }else{
      this.fishImg.src = "images/gotfish.png";
    }
  }

  draw(){
    this.fishImg.onload = ()=>{
      this.ctx.drawImage(this.fishImg, 82, 140);
    };
    this.ctx.drawImage(this.fishImg, 82, 140);
  }

  update(){
    this.a *= -1;
    this.toggleFish(this.a);
    this.ctx.clearRect(85,155,30,30);
    this.draw();
    if(this.outOfWater){
      window.setTimeout(()=>{
        this.fishmoving = window.requestAnimationFrame(this.update.bind(this));
      },100);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Fish);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Timer {
  constructor(ctx){
    this.ctx = ctx;
    this.count = 31;
    this.seconds = "31";
    this.on = false;
  }

  pause(){
    this.on = false;
  }

  draw(){
    this.ctx.font = "10px 'Press Start 2P',cursive";
    // this.ctx.fillStyle = "red";
    this.cal();
    this.ctx.fillText(`TIMER: 00:${this.seconds}`,270,20);
  }

  cal(){
    if(this.count < 10){
      this.seconds = `0${Math.floor(this.count)}`;
    }else{
      this.seconds = Math.floor(this.count).toString();
    }
  }

  update(){
    this.ctx.clearRect(0,0,400,100);
    this.count -= (1/220);
    this.draw();
    if(this.on && this.count > 1 ){
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Timer);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Board {
  constructor(){
    this.boardcanvasEl = document.getElementById("board-canvas");
    this.ctx = this.boardcanvasEl.getContext("2d");
    this.fishImg = new Image();
    this.fishImg.src = "images/fish.png";
  }

  show(){
    this.boardcanvasEl.style.visibility = "visible";
  }

  draw(type){
    if (type === "gotfish"){
        this.ctx.drawImage(this.fishImg, 35, 5);
    }else if (type === "broken"){
      this.ctx.font = "9px 'Press Start 2P',cursive";
      this.ctx.fillText("THE WIRE IS BROKEN!",20,74);
    }else if (type === "escape"){
      this.ctx.font = "10px 'Press Start 2P',cursive";
      this.ctx.fillText("THE FISH ESCAPED!",20,74);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Board);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map