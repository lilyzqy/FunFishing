class Instruction {
  constructor(ctx){
    this.ctx = ctx;
    this.X = 290;
    this.Y = 288;
  }

  draw(order){
    // this.ctx.fillRect(290,280,100,10);
    this.ctx.clearRect(200,278,200,10);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${order}`,this.X, this.Y);
    this.ctx.fillStyle = "black";
  }


}

export default Instruction;
