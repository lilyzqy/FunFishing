class Timer {
  constructor(ctx){
    this.ctx = ctx;
    this.count = 0;
    this.seconds = "00";
    this.on = true;
  }

  pause(){
    this.on = false;
  }

  draw(){
    this.ctx.font = "12px 'Press Start 2P',cursive";
    this.ctx.color = "red";
    this.ctx.fillText(`00:${this.seconds}`,330,20);
  }

  cal(){
    if(this.count < 10){
      this.seconds = `0${this.count}`;
    }else{
      this.seconds = this.count.toString();
    }
  }

  update(){

  }
}

export default Timer;
