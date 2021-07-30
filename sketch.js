//thank you

var garden,rabbit;
var gardenImg,rabbitImg;

var apple;
var appleI;

var leaves;
var leaves1;
var leaves2;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleI    = loadImage("apple.png");
  leaves2   = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  var select_sprites = Math.round(random(1,2));
  
  if (frameCount % 80 == 0){
    if (select_sprites== 1){
      createApple();
    }
    else
      {
        createLeaves();
      }
    
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x=World.mouseX 

  drawSprites();
}




function createApple(){
  
  apple = createSprite(random(25,375),0,10,10);
  apple.addImage(appleI);
  apple.velocityY=4;
  apple.lifetime=400;
  apple.scale=0.1;
}

function createLeaves(){
  
  leaves= createSprite(random(0,50),0,10,10) 
  leaves1=createSprite(random(350,400),0,10,10)
  leaves.addImage(leaves2);
  leaves1.addImage(leaves2);
  leaves.velocityY=4;
  leaves1.velocityY=4;
  leaves.lifetime=400;
  leaves1.lifetime=400;
  leaves.scale=0.1
  leaves1.scale=0.1
}