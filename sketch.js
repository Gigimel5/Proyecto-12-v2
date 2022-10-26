var boy, boyAnimation;
var path, pathImg;
var leftBoundary, rightBoundary;
var i;

function preload(){
  boyAnimation=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  pathImg=loadImage("path.png");
 
}

function setup(){
 createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=-2.5;
  path.scale=1.2;

  boy=createSprite(40,300,200,350);
  boy.addAnimation("Running", boyAnimation);
  boy.scale=0.8;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX
  
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
