class Fish{
  constructor(ctx,weight){
    this.ctx = ctx;
    this.weight = weight;
    this.outOfWater = false;
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

  draw(){
    this.fishImg.onload = ()=>{
      this.ctx.drawImage(this.fishImg, 82, 140);
    };
    this.ctx.drawImage(this.fishImg, 82, 140);
  }

  update(){
    this.a *= -1;
    this.toggleFish(this.a);
    if(this.outOfWater){
      this.ctx.clearRect(85,155,30,30);
      this.draw();
      window.setTimeout(()=>{
        this.fishmoving = window.requestAnimationFrame(this.update.bind(this));
      },100);
    }
  }
}

export default Fish;
