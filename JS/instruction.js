class Instruction {
  constructor(ctx){
    this.ctx = ctx;
  }

  draw(order){
    // this.ctx.fillRect(290,280,100,10);
    this.ctx.clearRect(290,278,130,10);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${order}`,290,288);
    this.ctx.fillStyle = "black";
  }


}

export default Instruction;
