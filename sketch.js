var bullet,wall,thickness;
var speed, weight,deform;
var bulletWeight,bulletSpeed;

function setup() {
  createCanvas(1500,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bulletWeight = random(30,52);
  bulletSpeed = random(223,321);
 
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");
  bullet.velocityX = speed; 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
   bullet.x=(wall.x-((thickness/2)+25));
   bullet.y=wall.y;
   var deform = (0.5*speed*speed*weight)/2500;
   var damage = (0.5*bulletWeight*bulletSpeed)/(thickness*thickness*thickness);
   if (deform < 100) {
    bullet.shapeColor=color(0, 255, 0);
   } 
   if (deform < 180 && deform > 100) {
    bullet.shapeColor=color(230, 230, 0); 
   }
   if (deform > 180) {
    bullet.shapeColor=color(255, 0, 0);
   }
   bullet.velocityX = 0;
   if (damage > 10) {
     wall.shapeColor=color(225,0,0);
   }
   if (damage < 10) {
     wall.shapeColor=color(0,255,0)
   }
  }
  
  drawSprites();
}