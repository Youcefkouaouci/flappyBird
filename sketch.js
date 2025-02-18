let imgBg;
let imgFlappy1;
let imgFlappy2;

let flappy;

// Load the image.
function preload() {
  imgBg = loadImage("/images/cityskyline.png");
  imgFlappy1 = loadImage("/images/flappy1.png");
  imgFlappy2 = loadImage("/images/flappy2.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  flappy = new Flappy(imgFlappy1, imgFlappy2);
  console.log(flappy);
}

//Boucle infini
function draw() {
  //Placement du fond sur tout l'ecran
  imageMode(CORNER);
  image(imgBg, 0, 0, width, height);

  flappy.display();
  flappy.move();

  //Ligne du bas ( laser )
  stroke("red");
  strokeWeight(5);
  line(0, height - 100, width, height - 100);
}

function mousePressed() {
  flappy.jump();
}
