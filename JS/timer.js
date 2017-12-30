class Timer {
  constructor(ctx){
    this.ctx = ctx;
    this.count = 31;
    this.seconds = "31";
    this.on = false;
  }

  pause(){
    this.on = false;
  }

  draw(){
    this.ctx.font = "9px 'Press Start 2P',cursive";
    // this.ctx.fillStyle = "red";
    this.cal();
    this.ctx.fillText(`TIMER: 00:${this.seconds}`,270,20);
  }

  cal(){
    if(this.count < 10){
      this.seconds = `0${Math.floor(this.count)}`;
    }else{
      this.seconds = Math.floor(this.count).toString();
    }
  }

  update(){
    this.ctx.clearRect(250,0,200,100);
    this.count -= (1/220);
    this.draw();
    if(this.on && this.count > 1 ){
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
}

export default Timer;
