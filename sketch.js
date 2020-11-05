var car,wall
var speed,weight
function setup() {
  createCanvas(1600,1000);
  car =createSprite(50, 200, 50, 50);
  speed = random(55,90)
  wright = random(400,1500)
  wall = createSprite(1400,200,60,height/2)
  car.velocityX=speed;
  
}

function draw() {
  background(255,255,255);  
   
if (wall.x-car.x < (car.weight+wall.weight)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  { 

    car.shapeColor=color(255,0,0);
  
  }
if (deformation<180 && deformation>100){

  car.shapeColor=color(230,230,0)
}
if (deformation<100){
  car.shapeColor=color(0,225,0)
}}

  drawSprites();
}