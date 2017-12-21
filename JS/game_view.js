import EnergyBar from"./energy_bar";
import Game from"./game";
import Fisherman from"./fisherman";
//timer
//fisherman

class GameView{
  constructor(ctx){
    this.ctx = ctx;
  }

  ready(){
    this.energyBar = new EnergyBar(this.ctx);
    this.fisherman = new Fisherman(this.ctx);
    this.game = new Game(this.ctx,this.fisherman);
    this.draw();
  }

  pressButton(e){
    if(this.game.on && e.code === "Space"){
      this.game.pressButton(e);
    }else if (!this.energyBar.moving && !this.game.on && e.code === "Enter"){
      document.getElementById("board").style.visibility = "hidden";
      document.getElementById("fish").style.visibility = "hidden";
      document.getElementById("escape").style.visibility = "hidden";
      document.getElementById("broken").style.visibility = "hidden";
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
    this.ctx.clearRect(0,0,400,260);
    this.ctx.clearRect(0,270,400,30);
    this.energyBar.draw();
    this.fisherman.draw("ready");
  }

}

export default GameView;
