class Timer {
  constructor(ctx){
    this.ctx = ctx;
    this.count = 30;
    this.seconds = "30";
    this.on = false;
  }

  pause(){
    this.on = false;
  }

  draw(){
    this.ctx.font = "10px 'Press Start 2P',cursive";
    // this.ctx.fillStyle = "red";
    this.ctx.fillText(`Timer: 00:${this.seconds}`,270,20);
  }

  cal(){
    if(this.count < 10){
      this.seconds = `0${this.count}`;
    }else{
      this.seconds = this.count.toString();
    }
  }

  update(){
    this.ctx.clearRect(0,0,400,100);
    this.count -= 1;
    if(this.on && this.count > 0 ){
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
}

export default Timer;
