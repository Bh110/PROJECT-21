var speed,weight,bullet, wall,thickness;
function preload( ){

}
function setup(){
  createCanvas( 1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random( 22,83);
bullet=createSprite( 50,200,thickness,20);
wall=createSprite( 1200,200,thickness,height/2);
wall.shapeColor=color( 80,80,80);
bullet.shapeColor=" white";
}
function draw(){
  background( "black");
  bullet.velocityX=speed;
  if(wall.x-bullet.x<( wall.width+bullet.width)/2){
    bullet.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if( damage>10){
  wall.shapeColor=" red";
}
if( damage<10){
  wall.shapeColor=color( 0,255,0);
}
  }
  drawSprites();
}