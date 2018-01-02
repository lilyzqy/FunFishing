import EnergyBar from"./energy_bar";
import Game from"./game";
import Fisherman from"./fisherman";
import Timer from './timer';
import Board from './board';
import Bucket from './bucket';


class GameView{
  constructor(ctx,wave,timer){
    this.ctx = ctx;
    this.wave = wave;
    this.timer = timer;
  }

  ready(){
    this.energyBar = new EnergyBar(this.ctx);
    this.fisherman = new Fisherman(this.ctx);
    this.board = new Board();
    this.bucket = new Bucket(this.ctx);
    this.game = new Game(this.ctx,
                         this.fisherman,
                         this.wave,
                         this.timer,
                         this.bucket,
                         this.board);
    this.draw();
  }

  pressButton(e){
    if(this.game.on && e.code === "Space"){
      this.game.pressButton(e);
    }else if (!this.energyBar.moving && !this.game.on && e.code === "Enter"){
      this.game.pressButton(e);
      this.timer.on = true;
      this.timer.update();
      this.energyBar.updateForEnergy();
      this.board.boardcanvasEl.style.visibility = "hidden";
      this.board.ctx.clearRect(0,0,200,140);
      this.update();
      this.energyBar.moving = true;
    }else if(this.energyBar.moving && !this.game.on && e.code === "Enter"){
      window.cancelAnimationFrame(this.energyBar.movingForEnergy);
      this.game.start(this.energyBar.X - 42);
      this.game.on = true;
      this.energyBar.moving = false;
    }
  }

  update(){
    if(this.timer.count < 0){
      this.gameover();
    }else if(!this.game.on){
      this.draw();
      window.requestAnimationFrame(this.update.bind(this));
    }
  }

  draw(){
    this.ctx.clearRect(0,110,400,150);
    this.ctx.clearRect(0,270,400,30);//energybar update
    this.ctx.clearRect(0,0,200,100);//bucket update
    this.bucket.draw();
    this.timer.draw();
    this.energyBar.draw();
    this.energyBar.drawTitle("Power");
    this.fisherman.draw("ready");
  }

  gameover(){
    const covercanvasEl = document.getElementById("cover-canvas");
    const coverctx = covercanvasEl.getContext("2d");
    covercanvasEl.style.visibility = "visible";
    coverctx.fillStyle = "white";
    coverctx.fillRect(0,0,400,300);
    coverctx.font = "9px 'Press Start 2P',cursive";
    coverctx.fillText("CONGRATULATIONS, FISH FOR DINNER!", 70,70);
  }

}

export default GameView;
