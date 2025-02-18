let imgBg;
let imgFlappy1;
let imgFlappy2;
let imgFlappy3;
let imgBullet;

let flappy;

// Load the image.
function preload() {
  imgBg = loadImage("/images/cityskyline.png");
  imgFlappy1 = loadImage("/images/flappy1.png");
  imgFlappy2 = loadImage("/images/flappy2.png");
  imgFlappy3 = loadImage("/images/flappy3.png");
  imgBullet = loadImage("/images/bullet.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  flappy = new Flappy(imgFlappy1, imgFlappy2, imgFlappy3);
  console.log(flappy);
}

//Boucle infini
function draw() {
  //Placement du fond sur tout l'ecran
  imageMode(CORNER);
  image(imgBg, 0, 0, width, height);

  //Affichage de Flappy
  flappy.update();

  for (let i = 0; i < flappy.bullets.length; i++) {
    flappy.bullets[i].update();
  }

  if (keyIsPressed === true) {
    //Touche ESPACE
    if (keyCode === 32) {
      flappy.shoot();
    }
  }

  console.log(flappy);
  //Ligne du bas ( laser )
  stroke("red");
  strokeWeight(5);
  line(0, height - 100, width, height - 100);
}

function mousePressed() {
  flappy.jump();
}
