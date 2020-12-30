function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 50);
  fixedRect = createSprite(300, 200, 60, 60);
  box1 = createSprite(400,100,40,40);
  box2 = createSprite(400,300,60,60);
  box3 = createSprite(600,200,50,50);
  
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  box1.shapeColor = "blue";
  box2.shapeColor = "yellow";
  box3.shapeColor  = "purple";

box1.velocityY = 4;
box2.velocityY = -4;
  

}

function draw() {
  background("pink");    
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(movingRect.x - fixedRect.x);

 if(isTouching(movingRect,box2))
 {
    movingRect.shapeColor = "red"; 
    box2.shapeColor = "red";
 }
else
{
   movingRect.shapeColor = "green";
   box2.shapeColor = "green";

}

bounceOff(box1 , box2);
  drawSprites();
}


