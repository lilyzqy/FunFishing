class Board {
  constructor(){
    this.boardcanvasEl = document.getElementById("board-canvas");
    this.ctx = this.boardcanvasEl.getContext("2d");
    this.fishImg = new Image();
    this.fishImg.src = "images/fish.png";
  }

  show(){
    this.boardcanvasEl.style.visibility = "visible";
  }

  draw(type, fishWeight){
    if (type === "gotfish"){
        this.ctx.drawImage(this.fishImg, 160, 85);
        this.ctx.font = "9px 'Press Start 2P',cursive";
        this.ctx.fillText(`WEIGHT: ${fishWeight} lb`,160,205);
    }else if (type === "broken"){
      this.ctx.font = "9px 'Press Start 2P',cursive";
      this.ctx.fillText("THE WIRE IS BROKEN!",139,155);
    }else if (type === "escape"){
      this.ctx.font = "10px 'Press Start 2P',cursive";
      this.ctx.fillText("THE FISH ESCAPED!",139,155);
    }
  }
}

export default Board;
