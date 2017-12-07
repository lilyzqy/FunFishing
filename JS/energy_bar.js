class EnergyBar {
  constructor(ctx){
    this.ctx = ctx;
    this.X = 42;
    this.Y = 274;
    this.img = new Image();
    this.img.src = "docs/energybar.png";
    this.moving = false;
  }

  draw(){
    this.ctx.drawImage(this.img, this.X, this.Y);
  }

  updateForEnergy(){
    if(this.X < (42+90)){
    this.X += 0.5;
    }
  }

  updateForWireStrenth(){
    if(this.X < (42+90)){
    this.X += 0.5;
    }
  }

  getStress(){
    if(this.X > 42){
      this.X -= 6;
    }
  }

  reset(){
    this.X = 42;
    this.Y = 274;
  }
}


module.exports = EnergyBar;
