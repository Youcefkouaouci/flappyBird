class Flappy {
  //Constantes a tout les Flappy
  constructor(image1, image2) {
    this.image1 = image1;
    this.image2 = image2;
    this.width = width / 10;
    this.posY = height / 2;
    this.posX = width / 3;
    this.speedY = 0;
  }

  display() {
    imageMode(CENTER);
    let img;
    if (this.speedY > 0) {
      img = this.image1;
    } else {
      img = this.image2;
    }
    image(img, this.posX, this.posY, width / 10, width / 15);
  }

  move() {
    this.posY += 3 - this.speedY;

    if (this.speedY > 0) {
      this.speedY--;
    }

    if (this.speedY < 0) {
      this.speedY = 0;
    }
  }

  jump() {
    this.speedY = 20;
  }

  shoot() {}

  dead() {}
}
