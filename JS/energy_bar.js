class EnergyBar {
  constructor(ctx,gameStatus){
    this.ctx = ctx;
    this.type = gameStatus ? "energy" : "wire";
    this.X = 42;
    this.Y = 274;
    this.img = new Image();
    this.img.src = "docs/energybar.png";
  }

  update(){
    if(this.type === "energy"){
      this.forEnergy();
    }else{
      this.forWireStrenth();
    }
  }

  draw(){
      this.ctx.drawImage(this.img, this.X, this.Y);
  }

  forEnergy(){
    let addOn = 0;
    if(addOn < 90){
      addOn += 1;
      this.X += addOn;
    }
  }

  forWireStrenth(){
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
