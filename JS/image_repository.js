class imageRepository {
	constructor(){
  	this.bar = new Image();
	// Ensure all images have loaded before starting the game
  	this.numImages = 1;
  	this.numLoaded = 0;

    this.bar.src = "../energybar.png";

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
