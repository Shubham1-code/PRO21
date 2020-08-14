var bullet, wall;
var speed, weight, thickness;
var damage;
function setup() {
  createCanvas(1600,400);
bullet = createSprite(50, 200, 50, 10);
wall = createSprite(1200, 200, thickness, height/2);
thickness = random(22,83);
weight = random(30,52);
speed= random (223,321);
}

function draw() {

console.log(damage);

  background(255,255,255);  

bullet.shapeColor = color(0,0,0);

  bullet.velocityX=speed;

if (bullet.collide(wall)) {
  bullet.velocityX=0;
  bullet.x=1150;
   damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

if (damage < 10){

wall.shapeColor = color("green");

} 

if (damage >= 10){

wall.shapeColor = color(255,0,0);

} 



  drawSprites();
}