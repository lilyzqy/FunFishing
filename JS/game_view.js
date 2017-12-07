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
    }else if (!this.energyBar.moving && !this.game.on && e.code === "Enter"){
      console.log(this.energyBar.moving);
      this.ready();
      this.update();
      this.energyBar.moving = true;
    }else if(this.energyBar.moving && !this.game.on && e.code === "Enter"){
      window.cancelAnimationFrame(this.energyBarMoving);
      this.game.start(this.energyBar.X);
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
    this.ctx.clearRect(0,0,400,300);
    this.energyBar.draw();
  }

}

module.exports = GameView;
