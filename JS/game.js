const Wire = require('./fish_wire');
const EnergyBar = require('./energy_bar');

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.on = false;
  }

  start(X){
    this.wire = new Wire(this.ctx,40,40,40*X*0.05,150);
    this.energyBar = new EnergyBar(this.ctx);
    this.draw();
    window.setTimeout(()=>{
      this.wire.fishOn = true;
      this.update();
    }, Math.floor((Math.random() * 3) + 1));
  }

  pressButton(e){
    if(this.wire.fishOn){
      this.wire.pullBack();
      this.energyBar.getStress();
    }
  }

  update(){
    this.wire.update();
    if(this.on){
      this.energyBar.updateForWireStrenth();
    }else{
      this.energyBar.reset();
    }
    this.draw();
    this.gameGoing = window.requestAnimationFrame(this.update.bind(this));
    this.mayEndGame();
  }

  draw(){
    this.ctx.clearRect(0,0,400,300);
    this.wire.draw();
    this.energyBar.draw();
  }

  mayEndGame(){
    if(this.wire.startX > this.wire.endX || this.wire.endX > 400 ||this.energyBar.X < 42){
      this.on = false;
      window.cancelAnimationFrame(this.gameGoing);
    }
  }

}

module.exports = Game;
