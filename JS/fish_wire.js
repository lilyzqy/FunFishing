class Wire {
  constructor(ctx,startX, endX){
    this.ctx = ctx;
    this.startX = startX;
    this.endX = endX;
    this.fishOn = false;
    this.dangerous = false;
    this.a = 1;
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
    this.startX = 82;
    this.endX -= 10;
    window.setTimeout(()=>{
      this.startX = 93;
    },800);
  }

  update(){
    this.fishRunAway();
  }
}

export default Wire;
