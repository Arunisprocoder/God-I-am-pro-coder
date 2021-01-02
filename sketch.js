var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background("black");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white"; 
  }
  else if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "white";
    gameObject1.shapeColor = "white";
  }
  else if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "white";
    gameObject2.shapeColor = "white";
  }
  else if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "white";
    gameObject3.shapeColor = "white";
  }
  else if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "white";
    gameObject4.shapeColor = "white";
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
    gameObject3.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }
  

 // bounceOff
/*
 if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2){
  fixedRect.velocityX=fixedRect.velocityX*(-1)
  movingRect.velocityX=movingRect.velocityX*(-1)
  }


   if(movingRect.y- fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.velocityY=fixedRect.velocityY*(-1)
    movingRect.velocityY=movingRect.velocityY*(-1)
    }

*/

  drawSprites();
}

