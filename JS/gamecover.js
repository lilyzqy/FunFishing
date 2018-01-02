class Gamecover{
  constructor(){
    this.el = document.getElementById("cover-canvas");
    this.ctx = this.el.getContext("2d");
  }

  draw(){
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0,0,400,300);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillText("CONGRATULATIONS, FISH FOR DINNER!", 70,70);
  }
}

export default Gamecover;
