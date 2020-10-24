
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
 monkey = createSprite(50,255,20,50);
  monkey.addAnimation("running", monkey_running);
bananaGroup=new Group()
  obstaclesGroup=new Group()

  monkey.scale = 0.1;
  
  ground = createSprite(200,290,4000,10);
 
  ground.x = ground.width /2;
 
  
}


function draw() {
background('pink')
 ground.velocityX = -4
   spawnObstacle() 
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    monkey.collide(ground)
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
     
  
 spawnBanana() 
  drawSprites()
  textSize(30)
  fill('blue')
  score=Math.ceil(frameCount/getFrameRate())
  text('score= '+score,400,50)
}


function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana= createSprite(600,120,40,10);
    banana.y = Math.round(random(120,160));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}
function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle= createSprite(600,260,40,10);
   // obstacle.y = Math.round(random(120,160));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2 ;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    //add each cloud to the group
    obstaclesGroup.add(obstacle);
  }
}





