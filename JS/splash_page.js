class SplashPage{
  constructor(wave){
    this.wave = wave;
    this.showing = true;
    this.el = document.getElementById("cover-canvas");
    this.ctx = this.el.getContext("2d");
  }

  hide(){
    this.el.style.visibility = "hidden";
  }

  draw(){

  }

  update(){

  }
}
