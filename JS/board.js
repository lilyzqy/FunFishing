class Board {
  constructor(){
    this.boardcanvasEl = document.getElementById("board-canvas");
    this.ctx = this.boardcanvasEl.getContext("2d");
  }

  show(){
    this.boardcanvasEl.style.visibility = "visible";
  }

  draw(type){
    if (type === "gotfish"){
      const fishImg = new Image();
      fishImg.src = "images/fish.png";
      this.ctx.drawImage(this.fishImg, 50, 140);
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
