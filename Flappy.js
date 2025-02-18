class Flappy {
  //Constantes a tout les Flappy
  constructor(image1, image2, image3) {
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;

    this.actualImage = image1;

    this.width = width / 10;
    this.height = width / 15;

    this.posY = height / 2;
    this.posX = width / 3;
    this.speedY = 0;
    this.bullets = [];

    this.shotDelay = 1000;
    this.lastShot = 0;
    this.shooted = false;
  }

  update() {
    this.display();
    this.move();
  }

  display() {
    imageMode(CENTER);
    let img;
    if (this.lastShot + 300 < milis()) {
      this.shooted = false;
    }
    if (this.shooted == false) {
      if (this.speedY > 0) {
        this.actualImage = this.image1;
      } else {
        this.actualImage = this.image2;
      }
    } else {
      this.actualImage = this.image3;
    }

    image(this.actualImage, this.posX, this.posY, this.width, this.height);
  }

  move() {
    this.posY += 0 - this.speedY;

    if (this.speedY > 0) {
      this.speedY--;
    }

    if (this.speedY < 0) {
      this.speedY = 0;
    }
  }

  jump() {
    this.speedY = 2;
  }

  shoot() {
    // temps
    /**
     * Stores the current time in milliseconds.
     *
     * @type {number}
     */

    let actualTime = millis();

    if (this.lastShot + this.shotDelay < actualTime) {
      this.shooted = true;
      this.lastShot = actualTime;
      this.bullets.push(
        new Bullet(this.posX + this.width / 2, this.posY + this.height / 5)
      );
    }
  }

  dead() {
    this.posY = height / 2;
    this.speedY = 0;
    this.bullets = [];
    this.shooted = false;
  }
}
