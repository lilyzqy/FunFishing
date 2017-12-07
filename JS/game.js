const Wire = require('./fish_wire');
const EnergyBar = require('./energy_bar');

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.on = false;
  }

  start(X){
    this.wire = new Wire(this.ctx,90,170,100+X+X*1.7,259);
    this.energyBar = new EnergyBar(this.ctx);
    this.draw();
    this.update();
    window.setTimeout(()=>{
      this.wire.fishOn = true;
    }, Math.floor((Math.random() * 8) + 5)*1000);
  }

  pressButton(e){
    if(this.wire.fishOn){
      this.wire.pullBack();
      this.energyBar.getStress();
    }
  }

  update(){
    if(this.on){
      if(this.wire.fishOn){
        this.wire.update();
      }
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
