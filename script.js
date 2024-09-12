let ball, ball2, box;
let collisions;
let ballsize = document.getElementById("ballsize");

let colors = ["Brown", "Coral", "CornflowerBlue", "Crimson", "DarkOrange", "DarkOrchid", "DeepPink", "Gold", "GreenYellow", "MediumBlue", "OrangeRed", "SpringGreen"];
document.body.style.backgroundColor = colors[(Math.floor(Math.random() * colors.length))];

let hit = new Audio("hit.mp3");
let hit2 = new Audio("hit.mp3");
let hit3 = new Audio("hit.mp3");

function setup() {
  new Canvas(500, 500);
  //world.gravity.y = 10; // i added gravity guys :p
  ball = new Sprite(250, 100);
  ball.width = 10;
  ball.height = 10;
  ball.speed = 10;
  ball.collider = 'dynamic';
  ball.bounciness = 1;
  ball.friction = 0;
  ball.strokeWeight = 0;
  collisions = 0;
  ball.direction = random(-100, 100);

  ball2 = new Sprite(250, 100);
  ball2.width = 10;
  ball2.height = 10;
  ball2.speed = 10;
  ball2.collider = 'dynamic';
  ball2.bounciness = 1;
  ball2.friction = 0;
  ball2.strokeWeight = 0;
  ball2.direction = random(-100, 100);

  box = new Sprite(250, 250, 490, 490, 's');
  box.shape = 'chain';

  background(0, 0, 0, 255);
}

function draw() {
  if (mouse.pressing()) {
    background(0, 0, 0, 5);
    world.timeScale = 0.25;
    //world.gravity.y = 25;
  } else {
    background(0, 0, 0, 15);
    world.timeScale = 1;
    world.gravity.y = 0;
  }
  if (ball.collides(box)) {
    ball.width += 1;
    ball.height += 1;
    hit.play();
  }
  if (ball2.collides(box)) {
    ball2.width += 1;
    ball2.height += 1;
    hit.play();
  }
  if (ball.collides(ball2)) {
    ball.width -= 1;
    ball.height -= 1;
    collisions+=1;
    //hit.play();
  }
  if (ball2.collides(ball)) {
    ball.width -= 1;
    ball.height -= 1;
    collisions+=1;
    //hit.play();
  }
  ballsize.innerHTML = "Ball 1 Size: " + Math.floor(ball.width);
  ball2size.innerHTML = "Ball 2 Size: " + Math.floor(ball2.width);
  balcol.innerHTML = "Ball Collisions: " + collisions;

  ball.speed = ball.width / 2;
  ball.rotation = 0;

  ball2.speed = ball2.width / 2;
  ball2.rotation = 0;


  if (ball.width > 175) {
    ball.width = 5;
    ball.height = 5;
  }

  if (ball2.width > 175) {
    ball2.width = 5;
    ball2.height = 5;
  }

  if (ball.width < 5) {
    ball.width += 5;
    ball.height += 5;
  }

  if (ball2.width < 5) {
    ball2.width += 5;
    ball2.height += 5;
  }
}

/*let ball, ball2, ball3;
let width = 400;
let height = 400;
let up, down, left, right;
let maxSpeed = 5;

function setup() {
  createCanvas(width, height);
  background(0);
  world.gravity.y = 2;
  up = new Sprite();
  down = new Sprite();
  left = new Sprite();
  right = new Sprite();
  up.y = 10;
  down.y = 390;
  left.x = 10;
  right.x = 390;

  up.width = 400;
  down.width = 400;
  left.height = 400;
  right.height = 400;

  up.collider = 's';
  down.collider = 's';
  left.collider = 's';
  right.collider = 's';

  ball = new Sprite(100, 200, 50);
  ball.collider = 'd';
  ball.bounciness = 2;

  ball2 = new Sprite(200, 200, 50);
  ball2.collider = 'd';
  ball2.bounciness = 2;

  ball3 = new Sprite(300, 200, 50);
  ball3.collider = 'd';
  ball3.bounciness = 2;

  ball.vel.x = random(-100, 100);
  ball2.vel.x = random(-100, 100);
  ball3.vel.x = random(-100, 100);
}

function draw() {
  //background(220);

  if (ball.speed > maxSpeed) {
    ball.speed = maxSpeed;
  }


  if (ball2.speed > maxSpeed) {
    ball2.speed = maxSpeed;
  }


  if (ball3.speed > maxSpeed) {
    ball3.speed = maxSpeed;
  }

  if (mouse.pressing()) {
    background(0, 0, 0, 30);
    world.gravity.y = 35;
  }
  else {
    background(0);
    world.gravity.y = 2;
  }
}


setInterval(() => {maxSpeed+=0.1;console.log(maxSpeed);}, 1000);
//setInterval(() => {ball.vel.x = random(-100, 100);ball2.vel.x = random(-100, 100);ball3.vel.x = random(-100, 100);}, 5000);
*/