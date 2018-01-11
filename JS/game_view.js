import EnergyBar from"./energy_bar";
import Game from"./game";
import Fisherman from"./fisherman";
import Timer from './timer';
import Board from './board';
import Bucket from './bucket';
import Instruction from './instruction';

class GameView{
  constructor(ctx,wave,gamecover){
    this.ctx = ctx;
    this.wave = wave;
    this.gamecover = gamecover;
    this.on = false;
  }

  ready(){
    this.energyBar = new EnergyBar(this.ctx);
    this.fisherman = new Fisherman(this.ctx);
    this.instruction = new Instruction(this.ctx);
    this.board = new Board();
    this.timer = new Timer(this.ctx);
    this.bucket = new Bucket(this.ctx);
    this.game = new Game(this.ctx,
                         this.fisherman,
                         this.wave,
                         this.timer,
                         this.bucket,
                         this.board,
                         this.gamecover,
                         this.instruction);
    this.draw();
  }

  pressButton(e){
    if(this.game.on && e.code === "Space"){
      this.game.pressButton(e);
    }else if (this.on && !this.energyBar.moving && !this.game.on && e.code === "Enter"){
      this.game.pressButton(e);
      this.timer.on = true;
      this.timer.update();
      this.energyBar.updateForEnergy();
      this.board.boardcanvasEl.style.visibility = "hidden";
      this.board.ctx.clearRect(110,80,200,140);
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
      this.timeup();
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
    this.instruction.X = 290;
    this.instruction.draw("PRESS ENTER");
  }

  timeup(){
    this.gamecover.el.style.visibility = "visible";
    this.gamecover.draw(this.bucket.fishNumber,this.bucket.weight);
  }

}

export default GameView;
