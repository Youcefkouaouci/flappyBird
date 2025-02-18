class Bullet {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.diameter = 30;
  }

  update() {
    this.display();
    this.move();
  }

  display() {
    fill("red");
    image(imgBullet, this.posX, this.posY, this.diameter * 2, this.diameter);
  }

  move() {
    this.posX += 5;

    if (this.posX > width) {
      console.log("DELETE");
      let index = flappy.bullets.indexOf(this); //Trouver l'index de l'objet dans le tableau
      flappy.bullets.splice(index, 1); //Supprimer l'objet du tableau
    }
  }
}
