class Flappy {
  constructor() {
    this.posYFlappy = height / 2;
    this.posXFlappy = 64;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    this.icon = birdSprite;
    this.width = 64;
    this.height = 64;
  }

  show() {
    image(this.icon, this.x, this.y, this.width, this.height);
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height) {
      this.y = height - this.height;
      this.velocity = 0;
    }

    if (this.y <= 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

let flappy = new Flappy();

console.log(flappy);
