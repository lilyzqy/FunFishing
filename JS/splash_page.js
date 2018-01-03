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
    // this.ctx.fillStyle = "blue";
    this.ctx.fillText("hi",0,0);
  }

  update(){

  }
}

export default SplashPage;
