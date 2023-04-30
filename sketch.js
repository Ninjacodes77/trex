var trex, trex_running, edges;
var groundImage, ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //creating ground
  ground= createSprite(200,180,400,20)
  ground.addImage("ground",groundImage)
  ground.x=ground.width/2
}


function draw(){
  //set background color 
  background(rgb (0,250,250));
  
  //logging the y position of the trex
  console.log(trex.y)

  ground.velocityX=-2;
  //creating infinite scrolling ground
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground)
  drawSprites();
}