class Gamecover{
  constructor(){
    this.el = document.getElementById("cover-canvas");
    this.ctx = this.el.getContext("2d");
    this.background = new Image();
    // this.background.src = 
  }

  draw(fishNumber,weight){
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0,0,400,300);
    this.ctx.font = "13px 'Press Start 2P',cursive";
    this.ctx.fillStyle = 'blue';
    this.ctx.fillText("TIME'S UP", 145,40);
    this.ctx.font = "9px 'Press Start 2P',cursive";
    this.ctx.fillText("REFRESH THE PAGE", 180, 230);
    this.ctx.fillText("TO PLAY AGAIN", 180, 240);
    this.ctx.fillText(`YOU COUGHT ${fishNumber} FISH`, 180, 150);
    this.ctx.fillText(`WEIGHT ${weight} lb`,180, 165);
    if(fishNumber !== 0){
      console.log(fishNumber);
      this.ctx.fillText("CONGRATULATIONS, FISH FOR DINNER!", 60,70);
    }else{
      this.ctx.fillText("FISHING IS HARD, GOOD LUCK NEXT TIME",50,60);
      // this.ctx.fillText("GOOD LUCK NEXT TIME",110,70);
    }
  }

  hide(){
    this.el.style.visibility = "hidden";
  }
}

export default Gamecover;
