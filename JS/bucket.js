class Bucket{
  constructor(ctx){
    this.ctx = ctx;
    this.bucketImg = new Image();
    this.bucketImg.src = "images/bucket.png";
    this.weight = 0;
    this.fishNumber = 0;
  }

  draw(){
    this.ctx.drawImage(this.bucketImg, 10, 10);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillText(`WEIGHT: ${this.weight} lb`,50,10);
    this.ctx.fillText(`WEIGHT: ${this.weight} lb`,500,20);
  }
}

export default Bucket;
