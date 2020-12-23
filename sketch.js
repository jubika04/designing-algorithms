var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(600,400,70,30);
  movingRect.shapeColor = "red";

  fixedRect = createSprite(700,400,30,70);
  fixedRect.shapeColor = "red";

  movingRect.debug = true;
  fixedRect.debug = true;
  
}

function draw() {
  background("black");
  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 )
    {
      movingRect.shapeColor = "yellow";
      fixedRect.shapeColor = "yellow";
    }


 else{
    movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }








  drawSprites();
}