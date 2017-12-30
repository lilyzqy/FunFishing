class Bucket{
  constructor(ctx){
    this.ctx = ctx;
    this.bucketImg = new Image();
    this.bucketImg.src = "images/bucket.png";
    this.weight = 0.00;
    this.fishNumber = 0;
  }

  draw(){
    this.bucketImg.onload =()=>{
      this.ctx.drawImage(this.bucketImg, 10,-5);
    };
    this.ctx.drawImage(this.bucketImg, 10, -5);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillText(`FISH: ${this.fishNumber}`,60,30);
    this.ctx.fillText(`WEIGHT: ${this.weight} lb`,60,40);
  }

  addFish(weight){
    this.fishNumber += 1;
    this.weight += weight;
    console.log(typeof this.weight);
  }
}

export default Bucket;
