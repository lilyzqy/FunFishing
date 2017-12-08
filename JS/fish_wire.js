class Wire {
  constructor(ctx,startX, startY, endX, endY){
    this.ctx = ctx;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.fishOn = false;
    this.ready = false;
  }

  draw(X){
    if(X < 60 && this.ready){
      this.ctx.strokeStyle = "#f23413";
    }else{
      this.ctx.strokeStyle = "#ffffff";
    }
    this.ctx.beginPath();
    this.ctx.moveTo( this.startX, this.startY);
    this.ctx.lineTo( this.endX, this.endY);
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

module.exports = Wire;
