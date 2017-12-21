class Wire {
  constructor(ctx,startX, endX){
    this.ctx = ctx;
    this.startX = startX;
    this.endX = endX;
    this.fishOn = false;
    this.dangerous = false;
    this.fishImg = new Image();
    this.a = 1;
  }

  toggleFish(a){
    if(a === 1){
      this.fishImg.src = "images/gotfish3.png";
    }else{
      this.fishImg.src = "images/gotfish.png";
    }
  }

  drawfish(){
    this.fishImg.onload = ()=>{
      this.ctx.drawImage(this.fishImg, 82, 140);
    };
    this.ctx.drawImage(this.fishImg, 82, 140);
  }

  updatefish(){
    this.a *= -1;
    this.toggleFish(this.a);
    this.ctx.clearRect(85,155,30,30);
    this.drawfish();
    window.setTimeout(()=>{
      this.fishmoving = window.requestAnimationFrame(this.updatefish.bind(this));
    },100);
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
