class Gamecover{
  constructor(){
    this.el = document.getElementById("cover-canvas");
    this.ctx = this.el.getContext("2d");
  }

  draw(status){
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0,0,400,300);
    this.ctx.font = "13px 'Press Start 2P',cursive";
    this.ctx.fillText("TIME UP");
    this.ctx.fillStyle = 'blue';
    if(status === "win"){
      this.ctx.fillText("CONGRATULATIONS, FISH FOR DINNER!", 60,70);

    }else{
      this.ctx.fillText("");
    }
  }
}

export default Gamecover;
