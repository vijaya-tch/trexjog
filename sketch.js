
var fdrt,mvrt,obj1,obj2;

function setup() {
  createCanvas(800,400);
 fdrt= createSprite(200, 200, 50, 50);
 fdrt.shapeColor="green";
 fdrt.debug=true;

 mvrt = createSprite(400, 200, 80, 50);
 mvrt.shapeColor="green";
 mvrt.debug=true;

 obj1 = createSprite(400, 200, 80, 50);
 obj1.shapeColor="pink";
 obj2 = createSprite(400, 100, 80, 50);
 obj2.shapeColor="yellow";
 
}

function draw() {
  background("grey"); 
  
  mvrt.x=World.mouseX;
  mvrt.y=World.mouseY;
  console.log(mvrt.x-fdrt.x);
  
 if(isTouching(mvrt,obj2))
 {
  mvrt.shapeColor="red";
obj2.shapeColor="red";
   
 //text("they are touching",10,100);
 }
else{
  mvrt.shapeColor="green"
obj2.shapeColor="pink";
}

  drawSprites();
}
