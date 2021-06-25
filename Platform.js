class Platform{
constructor(positionX){
    this.x = positionX;
    this.y = 600;
    this.width = random(100,500);
    this.height = random([260,190,190,190,260,260,260,260,260,260,190,190]);

    this.spt = createSprite(this.x,this.y,this.width,this.height);
    this.spt.shapeColor = "green";
    this.spt.addAnimation("ground",groundAnimation);
    this.spt.scale = 3;
}
}