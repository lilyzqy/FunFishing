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
    if(addOn < 96){
      addOn += 1;
      this.X += addOn;
    }
  }

  forWireStrenth(){

  }

  getStress(){

  }

  reset(){
    this.X = 42;
    this.Y = 274;
  }
}


module.exports = EnergyBar;
