var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background("red");
drawSprites()
if(keyDown("d")){
  background("blue")
}
if(keyDown("a")){
  background("yellow")
}
if(keyDown("w")){
  background("black")
}
if(keyDown("s")){
  background("pink")
}
}





