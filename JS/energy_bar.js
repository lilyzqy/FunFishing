class EnergyBar {
  constructor(ctx,gameStatus){
    this.ctx = ctx;
    this.type = gameStatus ? "energy" : "wire";
    this.X = 100;
    this.Y = 300;
    this.img = window.document.querySelector("img");
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
    this.X = 10;
    this.Y = 10;
  }
}


module.exports = EnergyBar;
