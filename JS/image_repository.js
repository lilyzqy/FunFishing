class imageRepository {
	constructor(){
    this.background = new Image();
  	this.fisherman = new Image();
  	this.fishWire = new Image();
	// Ensure all images have loaded before starting the game
  	this.numImages = 3;
  	this.numLoaded = 0;

    this.background.src = "imgs/bg.png";
  	this.spaceship.src = "imgs/ship.png";
  	this.bullet.src = "imgs/bullet.png";
  }

	imageLoaded() {
		this.numLoaded++;
		if (this.numLoaded === this.numImages) {
			window.init();
		}
	}

  load(){
    this.background.onload = ()=> this.imageLoaded;
  }

}
