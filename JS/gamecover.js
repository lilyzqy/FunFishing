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
    this.ctx.fillText("TIME'S UP", 145,40);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillText("REFRESH THE PAGE", 160, 230);
    this.ctx.fillText("TO PLAY AGAIN", 160, 240);
    if(fishNumber !== 0){
      console.log(fishNumber);
      this.ctx.fillText("CONGRATULATIONS, FISH FOR DINNER!", 60,70);
      this.ctx.fillText(`YOU COUGHT ${fishNumber} FISH`, 160, 180);
      this.ctx.fillText(`WEIGHT ${weight} lb`,160, 190);
    }else{
      this.ctx.fillText("",0,0);
    }
  }

  hide(){
    this.el.style.visibility = "hidden";
  }
}

export default Gamecover;
