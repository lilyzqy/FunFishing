class Wire {
  constructor(ctx,startX, endX){
    this.ctx = ctx;
    this.startX = startX;
    this.endX = endX;
    this.fishOn = false;
    this.dangerous = false;
  }

  draw(X){
    if(X < 60 && this.dangerous){
      this.ctx.strokeStyle = "#f23413";
    }else{
      this.ctx.strokeStyle = "#ffffff";
    }
    this.ctx.beginPath();
    this.ctx.moveTo( this.startX, 142);
    this.ctx.lineTo( this.endX,259);
    this.ctx.stroke();
  }

  fishRunAway(){
    this.endX += 0.5;
  }

  pullBack(){
    this.endX -= 10;
  }

  update(){
    this.fishRunAway();
  }
}

export default Wire;
