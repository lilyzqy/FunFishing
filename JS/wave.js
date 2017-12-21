class Wave {
  constructor(ctx){
    this.ctx = ctx;
    this.X = 0;
    this.Y = 0;
    this.img = new Image();
    this.img.src = "images/wave.png";
    this.a = 0.1;
  }

  draw(){

    // this.img.onload =()=>{
      this.ctx.drawImage(this.img, this.X, this.Y);
    // };
  }

  move(){
    const min = -10;
    const max = 1.2;
    if( min < this.X < max){
      if(this.X < min || this.X > max){
        this.a *= -1;
      }
      this.X += this.a;
    }
  }

  update(){
    this.ctx.clearRect(0,260,400,10);
    this.move();
    this.draw();
    window.requestAnimationFrame(this.update.bind(this));
  }
}

export default Wave;
