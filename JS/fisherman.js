class Fisherman {
  constructor(ctx){
    this.ctx = ctx;
    this.readyPosImg = new Image();
    this.readyPosImg.src = "images/readystance.gif";
    this.fishingPosImg = new Image();
    this.fishingPosImg.src = "images/fishingstance.png";
    this.gotfishPosImg = new Image();
    this.gotfishPosImg.src = "images/gotfishfisherman.png";
    this.brokenPosImg = new Image();
    this.brokenPosImg.src = "images/broken.png";
  }

  draw(pos){
    if(pos === "ready"){
    this.readyPosImg.onload = ()=>{
      this.drawReady();
    };
    this.drawReady();
    }else if (pos === "fishing"){
      this.ctx.drawImage(this.fishingPosImg, 50, 140);
    }else if (pos === "gotfish"){
      this.ctx.drawImage(this.gotfishPosImg, 55,136);
    }else if (pos === "broken"){
      this.ctx.drawImage(this.brokenPosImg,44,135);
    }
  }

  pullBack(){
    this.fishingPosImg.src = "images/pullstance-3.gif";
    window.setTimeout(()=>{
      this.fishingPosImg.src = "images/fishingstance.png";
    },800);
  }

  drawReady(){
    this.ctx.drawImage(this.readyPosImg, 26 , 148);
  }
}

export default Fisherman;
