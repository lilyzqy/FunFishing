const Wire = require('./fish_wire');
const EnergyBar = require('./energy_bar');

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.on = false;
  }

  start(){
    this.wire = new Wire(this.ctx,40,40,300,150);
    this.energyBar = new EnergyBar(this.ctx,this.on);
    this.draw();
    this.update();
  }

  pressButton(e){
    if(this.on && e.code === "Space"){
      this.wire.pullBack();
      this.energyBar.getStress();
    }else if(!this.on && e.code === "Enter"){
      this.start();
      this.on = true;
    }
  }

  update(){
    this.wire.update();
    if(this.on){
      this.energyBar.forWireStrenth();
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
    if(this.wire.startX > this.wire.endX || this.wire.endX > 400){
      this.on = false;
      window.cancelAnimationFrame(this.gameGoing);
    }
  }

}

module.exports = Game;
