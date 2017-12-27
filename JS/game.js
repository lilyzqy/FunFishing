import Wire from './fish_wire';
import EnergyBar from './energy_bar';
import Board from './board';

class Game {
  constructor(ctx,fisherman,fish,wave,timer){
    this.ctx = ctx;
    this.on = false;
    this.fisherman = fisherman;
    this.fish = fish;
    this.wave = wave;
    this.timer = timer;
  }

  start(X){
    this.wire = new Wire(this.ctx,93,100+X*2.7);
    this.energyBar = new EnergyBar(this.ctx);
    this.board = new Board();
    this.draw();
    this.update();
    // this.wave.update();
    this.timer.update();
    window.setTimeout(()=>{
      this.wire.fishOn = true;
      this.youGotFish();
    }, Math.floor((Math.random() * 8) + 0)*1000);
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
    }else if(e.code === "Enter" && this.fish.outOfWater){
      this.fish.outOfWater = false;
    }
  }

  update(){
    if(this.on){
      if(this.wire.fishOn){
        this.wire.update();
      }
      this.energyBar.updateForWireStrenth();
      if(this.energyBar.X >= 65){
        this.wire.dangerous = true;//for the wire color
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

export default Game;
