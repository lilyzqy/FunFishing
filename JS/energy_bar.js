class EnergyBar {
  constructor(ctx){
    this.ctx = ctx;
    this.X = 42;
    this.Y = 274;
    this.img = new Image();
    this.img.src = "docs/energybar.png";
    this.moving = false;
    this.a = 0.5;
  }

  draw(){
    this.ctx.drawImage(this.img, this.X, this.Y);
  }

  updateForEnergy(){
    let min = 41;
    let max = 42+90;
    // let a = 0.5;
    if(min < this.X < max){
      if(this.X === min || this.X === max){
        this.a *= -1;
      }
      this.X += this.a;
    }
    // if(min < this.X < max){
    //   this.X += a;
    // }else{
    //   a *= (-1);
    // }
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
