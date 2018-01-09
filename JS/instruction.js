class Instruction {
  constructor(ctx){
    this.ctx = ctx;
  }

  draw(){
    this.ctx.clearRect(250,250,30,10);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillText("PRESS ENTER");
  }

  
}
