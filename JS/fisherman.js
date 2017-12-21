class Fisherman {
  constructor(ctx){
    this.ctx = ctx;
    this.readyPosImg = new Image();
    this.readyPosImg.src = "images/readystance.gif";
    this.fishingPosImg = new Image();
    this.fishingPosImg.src = "images/fishingstance.png";
  }

  draw(pos){
    if(pos === "ready"){
    this.readyPosImg.onload = ()=>{
      this.drawReady();
    };
    this.drawReady();
    }else if (pos === "fishing"){
      this.ctx.drawImage(this.fishingPosImg, 50, 140);
    }
  }

  drawReady(){
    this.ctx.drawImage(this.readyPosImg, 26 , 148);
  }
}

export default Fisherman;
