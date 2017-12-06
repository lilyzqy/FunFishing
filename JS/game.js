const Wire = require('./fish_wire');

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.wire = new Wire(ctx,40,40,300,150);

  }

  update(){
    this.wire.fishRunAway();
    this.draw();
    window.requestAnimationFrame(this.update.bind(this));
  }

  draw(){
    this.ctx.clearRect(0,0,400,300);
    this.wire.draw();
  }




}

module.exports = Game;
