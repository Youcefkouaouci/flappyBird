let imgBg;
let imgFlappy;
let imgFlappy1;
let imgFlappy2;
let posY;
let speedY = 0;
// Load the image.
function preload() {
  imgBg = loadImage("/images/cityskyline.png");
  imgFlappy1 = loadImage("/images/flappy1.png");
  imgFlappy2 = loadImage("/images/flappy2.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  posY = height / 2;
}

//Boucle infini
function draw() {
  //Application gravité et vitesse du saut
  posY += 4.5 - speedY;
  //Réduire la vitesse
  if (speedY > 0) {
    speedY--;
  }
  if (speedY < 0) {
    speedY = 0;
  }
  //Placement du fond sur tout l'ecran
  imageMode(CORNER);
  image(imgBg, 0, 0, width, height);

  //Placement du JOUEUR sur l'ecran, un tiers a gauche et une taille
  imageMode(CENTER);
  if (speedY > 0) {
    imgFlappy = imgFlappy2;
  } else {
    imgFlappy = imgFlappy1;
  }

  image(imgFlappy, width / 3, posY, width / 10, width / 15);

  //Ligne du bas ( laser )
  stroke("red");
  strokeWeight(5);
  line(0, height - 100, width, height - 100);
}

function mousePressed() {
  speedY = 20;
}
