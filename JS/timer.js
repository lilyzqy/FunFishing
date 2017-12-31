class Timer {
  constructor(ctx){
    this.ctx = ctx;
    this.count = 10;
    this.on = false;
  }

  pause(){
    this.on = false;
  }

  timepass(){
    window.setTimeout(()=>{
      this.count -= 1;
      this.timepass();
    },10000);
  }

  draw(){
    this.ctx.font = "9px 'Press Start 2P',cursive";
    // this.ctx.fillStyle = "red";
    this.cal();
    this.ctx.fillText(`TIMER: 00:${this.seconds}`,270,30);
  }

  cal(){
    if(this.count < 9.5){
      this.seconds = `0${Math.ceil(this.count.toFixed())}`;
    }else{
      this.seconds = Math.ceil(this.count.toFixed());
    }
  }

  update(){
    this.ctx.clearRect(250,0,200,100);
    this.draw();
    if(this.on && this.count > 0 ){
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
}

export default Timer;
