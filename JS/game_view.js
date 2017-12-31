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
    if(this.timer.count < 0.5){
      this.gameover;
    }else{
      this.draw();
      this.energyBar.updateForEnergy();
      this.energyBarMoving = window.requestAnimationFrame(this.update.bind(this));
    }
  }

  draw(){
    this.ctx.clearRect(0,110,400,150);
    this.ctx.clearRect(0,270,400,30);
    this.ctx.clearRect(0,0,200,100);
    this.bucket.draw();
    this.timer.draw();
    this.energyBar.draw();
    this.energyBar.drawTitle("Power");
    this.fisherman.draw("ready");
  }

  gameover(){
    console.log("?");
    this.ctx.fillStyle = "white";
    this.ctx.rect(0,0,400,300);
    this.ctx.fillRect();
    this.ctx.font = "10px 'Press Start 2P',cursive";
    this.ctx.fillText(`Congratulations, fish for dinner!`, 100, 150);
  }

}

export default GameView;
