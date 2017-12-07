const EnergyBar = require('./energy_bar');
const Game = require("./game");
//timer
//fisherman

class GameView{
  constructor(ctx){
    this.ctx = ctx;
  }

  ready(){
    this.energyBar = new EnergyBar(this.ctx);
    this.game = new Game(this.ctx);
    this.draw();
  }

  pressButton(e){
    if(this.game.on && e.code === "Space"){
      this.game.pressButton(e);
    }else if (!this.energyBar.moving && e.code === "Enter"){
      this.update();
    }else if(this.energyBar.moving && e.code === "Enter"){
      window.cancelAnimationFrame(this.energyBarMoving);
      this.game.start(this.energyBar.X);
      this.game.on = true;
    }
  }

  update(){
    this.energyBar.updateForEnergy();
    this.draw();
    this.energyBarMoving = window.requestAnimationFrame(this.update.bind(this));
  }

  draw(){
    this.ctx.clearRect(0,0,400,300);
    this.energyBar.draw();
  }

}

module.exports = GameView;
