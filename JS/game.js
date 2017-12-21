import Wire from './fish_wire';
import EnergyBar from './energy_bar';

class Game {
  constructor(ctx,fisherman){
    this.ctx = ctx;
    this.on = false;
    this.fisherman = fisherman;
  }

  start(X){
    this.wire = new Wire(this.ctx,93,100+X*2.7);
    this.energyBar = new EnergyBar(this.ctx);
    this.draw();
    this.update();
    window.setTimeout(()=>{
      this.wire.fishOn = true;
      this.youGotFish();
    }, Math.floor((Math.random() * 8) + 5)*1000);
  }

  youGotFish(){
    const mark = document.querySelector("h2");
    mark.style.visibility = "visible";
    setTimeout(() => {
        mark.style.visibility = "hidden";
    }, 300);
  }

  pressButton(e){
    if(this.wire.fishOn){
      this.wire.pullBack();
      this.energyBar.getStress();
      this.fisherman.pullBack();
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
    this.ctx.clearRect(0,0,400,260);
    this.ctx.clearRect(0,270,400,30);
    this.wire.draw(this.energyBar.X);
    this.energyBar.draw();
    this.fisherman.draw("fishing");
  }

  mayEndGame(){
    if(this.wire.startX > this.wire.endX){
      document.getElementById("fish").style.visibility = "visible";
      this.ctx.clearRect(0,0,400,260);
      this.fisherman.draw("gotfish");
      this.endGame();
    }else if( this.wire.endX > 400){
      document.getElementById("escape").style.visibility = "visible";
      this.endGame();
    } else if(this.energyBar.X < 42){
      document.getElementById("broken").style.visibility = "visible";
      this.endGame();
    }
  }

  endGame (){
    document.getElementById("board").style.visibility = "visible";
    this.on = false;
    window.cancelAnimationFrame(this.gameGoing);
  }

}

export default Game;
