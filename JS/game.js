const Wire = require('./fish_wire');

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.on = false;
  }

  start(){
    this.wire = new Wire(this.ctx,40,40,300,150);
    this.draw();
    this.update();
  }

  pressButton(e){
    if(this.on && e.code === "Space"){
      this.wire.pullBack();
    }else if(!this.on && e.code === "Enter"){
      this.start();
      this.on = true;
    }
  }

  update(){
    this.wire.update();
    this.draw();
    this.animate = window.requestAnimationFrame(this.update.bind(this));
    this.endGame();
  }

  draw(){
    this.ctx.clearRect(0,0,400,300);
    this.wire.draw();
  }

  endGame(){
    if(this.wire.startX > this.wire.endX || this.wire.endX > 400){
      console.log("hi");
      this.on = false;
      window.cancelAnimationFrame(this.animate);
    }
  }

}

module.exports = Game;
