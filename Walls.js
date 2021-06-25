class Walls {
    constructor(posX) {
        this.rx = posX;
      this.ry = height-random([350,550])   //height - heightPlatform
     // this.colour = color('Green'); // red
      this.spt=createSprite(this.rx, this.ry);
      this.spt.shapeColor="brown";
      this.spt.addAnimation("wall",wallAnimation);
      this.spt.scale = 2;
    }
  
  
  }
  