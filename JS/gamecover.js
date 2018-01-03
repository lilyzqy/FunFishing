class Gamecover{
  constructor(){
    this.el = document.getElementById("cover-canvas");
    this.ctx = this.el.getContext("2d");
  }

  draw(fishNumber,weight){
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0,0,400,300);
    this.ctx.font = "13px 'Press Start 2P',cursive";
    this.ctx.fillStyle = 'blue';
    this.ctx.fillText("TIME'S UP", 70,40);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    if(fishNumber !== 0){
      this.ctx.fillText("CONGRATULATIONS, FISH FOR DINNER!", 60,70);

    }else{
      this.ctx.fillText("");
    }
  }
}

export default Gamecover;
