class Fisherman {
  constructor(ctx){
    this.ctx = ctx;
    this.X = 26;
    this.Y = 148;
    this.readyPosImg = new Image();
    this.readyPosImg.src = "images/readystance.gif";
    this.fishingPosImg = new Image();
    this.fishingPosImg.src = "images/fishingstance.png";
    // this.pullingPosImg = new Image();
    // this.pullingPosImg.src = "images/pullstance-3.gif";
  }

  draw(pos){
    if(pos === "ready"){
    this.readyPosImg.onload = ()=>{
      this.drawReady();
    };
    this.drawReady();
    }else if (pos === "fishing"){
      this.X = 50;
      this.Y = 140;
      this.ctx.drawImage(this.fishingPosImg, this.X, this.Y);
    // }else{
    //   this.ctx.drawImage(this.pullingPosImg, 50, 140);
    }
  }

  drawReady(){
    this.X = 26;
    this.Y = 148;
    this.ctx.drawImage(this.readyPosImg, this.X , this.Y);
  }
}

export default Fisherman;
