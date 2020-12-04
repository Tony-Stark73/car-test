var car,wall,speed,weight,def,vel,gar,gar1;



function preload(){


}

function setup() {
  createCanvas(1600,400);
  vel=random(5,8);
speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor=("black")
  car=createSprite(50,200,50,50);
  car.shapeColor=("gold")
  car.velocityX=vel;


def=(0.5*weight*speed*speed)/22500;

}

function draw() {
  background("white"); 
  if(wall.x-car.x<wall.width/2){
    car.velocityX=0;
  if(def<80){
car.shapeColor=color(255,0,0)
  }
if(def>80&&def<180){
  car.shapeColor=color(230,230,0)
}

if(def>180){
  car.shapeColor=color(0,255,0)
    
  }

}


  drawSprites();
}