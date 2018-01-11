class Instruction {
  constructor(ctx){
    this.ctx = ctx;
  }

  draw(){
    this.ctx.clearRect(250,250,30,10);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("PRESS ENTER",290,290);
    this.ctx.fillStyle = "black";
  }


}

export default Instruction;
