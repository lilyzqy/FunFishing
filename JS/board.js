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

  draw(type){
    if (type === "gotfish"){
        this.ctx.drawImage(this.fishImg, 35, 5);
    }else if (type === "broken"){
      this.ctx.font = "10px 'Press Start 2P',cursive";
      this.ctx.fillText("The wire is broken",20,20);
    }else if (type === "escape"){
      this.ctx.font = "10px 'Press Start 2P',cursive";
      this.ctx.fillText("The fish escaped",20,20);
    }
  }
}

export default Board;
