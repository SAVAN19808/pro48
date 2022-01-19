var canvas;
var MESSI,NEYMAR_JR,FOOTBALL_FIELD
var FIELD,messiImage
var ball
var score=0

function preload() {
  
  neymarImage = loadImage("new.png");
  FIELD = loadImage("FOOTBALL FIELD.png");
  messiImage = loadImage("video_image.png");
  ballImage=loadImage("ball.png");
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  FOOTBALL_FIELD = createSprite(width/2,height/2,width,height);
  FOOTBALL_FIELD.addImage(FIELD);
  FOOTBALL_FIELD.scale=2.5

  MESSI = createSprite(420,490,60,50)
  MESSI.addImage(messiImage);
  MESSI.scale=0.2

  NEYMAR_JR=createSprite(1530,500,60,50)
  NEYMAR_JR.addImage(neymarImage);
  NEYMAR_JR.scale=0.4

  ball=createSprite(960,480,100,100)
  ball.addImage(ballImage)
  ball.scale=0.1

  edges=createEdgeSprites()
}


function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown("RIGHT_ARROW")){
    MESSI.x=MESSI.x+10
  }
  if(keyDown("LEFT_ARROW")){
    MESSI.x=MESSI.x-10
  }
  if(keyDown("UP_ARROW")){
    MESSI.y=MESSI.y-10
  }
  if(keyDown("DOWN_ARROW")){
    MESSI.y=MESSI.y+10
  }

 if(MESSI.isTouching(ball)){
   ball.velocityX=5;
   ball.velocityY=4;
  
 }
 if(NEYMAR_JR.isTouching(ball)){
   ball.velocityX=-4
   NEYMAR_JR.x=1530
 }
 if(keyDown("RIGHT_ARROW")){
 NEYMAR_JR.x=NEYMAR_JR.x+10
}
if(keyDown("LEFT_ARROW")){
  NEYMAR_JR.x=NEYMAR_JR.x-10
}
if(keyDown("UP_ARROW")){
  NEYMAR_JR.y=NEYMAR_JR.y-10
}
if(keyDown("DOWN_ARROW")){
 NEYMAR_JR.y=NEYMAR_JR.y+10
}


 if(MESSI.isTouching(ball))
  score=score+=1;
 
text("Score:"+score,700,500)

 ball.bounceOff(edges);
 MESSI.bounceOff(edges);
 NEYMAR_JR.bounceOff(edges);

}






