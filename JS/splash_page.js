import Wave from './wave';

class SplashPage{
  constructor(){
    this.showing = true;
    this.el = document.getElementById("splash-canvas");
    this.ctx = this.el.getContext("2d");
    this.wave = new Wave(this.ctx);
    this.wave.draw();
    this.wave.update();
  }

  hide(){
    this.el.style.visibility = "hidden";
  }

  draw(){
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillText("WELCOME TO",80,100);
    this.ctx.fillText("PRESS ENTER TO START",180,200);
    this.ctx.font = "23px 'Press Start 2P',cursive";
    this.ctx.fillText("FUN FISHING",80,140);
  }

  update(){

  }
}

export default SplashPage;
