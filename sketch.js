 var platform1,platform2;
 var platform;
 var mario; 
 var platformGroup;
 var marioAnimation,obstacleAnimation1,obstacleAnimation2,obstacleAnimation3,wallAnimation,groundAnimation


 function preload()
 {
   marioAnimation = loadAnimation("images/Capture1.png","images/Capture3.png","images/Capture4.png");
   obstacleAnimation1 = loadAnimation("images/obstacle1.png")
   obstacleAnimation2 = loadAnimation("images/obstacle2.png")
   obstacleAnimation3 = loadAnimation("images/obstacle3.png");
   wallAnimation = loadAnimation("images/wall.png");
   groundAnimation = loadAnimation("images/ground.PNG");

 }

 function setup() {
  createCanvas(displayWidth, 668);
 //platform1 = new Platform(100);
 //platform2 = new Platform(500);

 var countDistanceX = 0;
 var gap = 60;
 mario = new Player();
 platformGroup = new Group();

 for(var i=0; i<14; i++){
   platform = new Platform(countDistanceX);
   platformGroup.add(platform.spt);
   countDistanceX = countDistanceX + platform.width+gap;
   wall = new Walls(countDistanceX);
   obstacle = new Obstacles(countDistanceX);
   platformGroup.add(wall.spt);
  }
 }

 function draw() {
  background('skyblue'); 
translate(-mario.spt.x + width/2 ,0);

  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("left")){
    mario.moveLeft();
  }
  if(keyDown("right")){
    mario.moveRight();
  }
  if(keyDown("up")&& mario.spt.velocityY == 0){
    mario.jump();
  }
  drawSprites();

 }

