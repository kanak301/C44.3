var player;
var opp1,opp2;
var ball;

var gameState = "hold";

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	//Create the Bodies Here.

player = new Pcclass(600,350);

opp1 = new Npcclass();
opp2 = new Npcclass();

ball = createSprite(player.pc.x,player.pc.y-20,20,20);
ball.shapeColor = "yellow";

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  fill("white");
  strokeWeight(5);
stroke("white");
  line(500,100,700,100);
  line(500,0,500,100);   
  line(700,0,700,100);  

  if(gameState=="hold") {
	ball.x = player.pc.x ;
	ball.y = player.pc.y - 20;
  
  }
  
  // to hold and move ball along with player

  if(keyIsDown(UP_ARROW)&&player.pc.y>10){
	player.pc.y = player.pc.y-10;
}

if(keyIsDown(DOWN_ARROW)&&player.pc.y<700){
  player.pc.y = player.pc.y+10;
}

if(keyIsDown(RIGHT_ARROW)&&player.pc.x<1200){
  player.pc.x = player.pc.x+10;
}

if(keyIsDown(LEFT_ARROW)&&player.pc.x>10){
  player.pc.x = player.pc.x-10;
}

// logic to kick the ball when a,w,d keys are pressed along wiht space key

if(keyIsDown(32) && keyIsDown(65)) {
	gameState = "kicked";
ball.velocityX=-5;
ball.velocityY=-5;

}

if(keyIsDown(32) && keyIsDown(68)) {
	gameState = "kicked";
ball.velocityX=5;
ball.velocityY=-5;

}

if(keyIsDown(32) && keyIsDown(87)) {
	gameState = "kicked";
ball.velocityX=0;
ball.velocityY=-5;

}
  drawSprites();

}


