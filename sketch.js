var ball,paddle,wall1,wall2,wall3,wall4;
var ballimg,paddleimg

function preload() {
  ballimg=loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(30,200,50,50);
  ball.addImage("ball.png", ballimg);
  ball.velocityX=9;
  ball.velocityY=9;

  paddle = createSprite(370,200,10,100);
  paddle.addImage("paddle.png", paddleimg);
  
  wall1 = createSprite(1,200,1,400);
  wall1.visible=false;
  
  wall2 = createSprite(200,1,400,1);
  wall2.visible=false;
  
  wall3 = createSprite(200,399,400,1);
  wall3.visible=false;
  
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites;
  
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);

  ball.bounceOff(paddle);
  paddle.collide(wall2);
  paddle.collide(wall3);
  
  
  if(keyDown(UP_ARROW))
  {
  paddle.velocityY=-10;
  }else {paddle.velocityY=0;}
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY=10;
  }
  
  callback();
  randomVelocity();
  drawSprites();
}

function randomVelocity()
{if (ball.x>400||ball.y<0){
  ball.velocityX=ball.velocityX+1;
  ball.velocityY=ball.velocityY+1;  
  
  paddle.velocityY=paddle.velocityY+1;
}}

function callback () {
  
  if (ball.x>400||ball.y<0){

  ball.x=100;
  ball.y=200;

  }
  
}