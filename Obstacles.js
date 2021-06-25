class Obstacles {
    constructor(posX) {
        this.rx = posX;
      this.ry = height-random([200,400,600])   //height - heightPlatform
     // this.colour = color('Green'); // red
      this.spt=createSprite(this.rx, this.ry);
      this.spt.shapeColor="brown";
      this.spt.addAnimation("obstacle1",obstacleAnimation1);
      this.spt.addAnimation("obstcale2",obstacleAnimation2);
      this.spt.addAnimation("obstcale3",obstacleAnimation3);
      this.spt.scale = 0.5;
      this.spt.velocityX = -2;
    }
  
  
  }
  