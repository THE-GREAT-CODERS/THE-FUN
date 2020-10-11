class ground {
   constructor(x,y,width,height) {
    var option = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    //this.body= box1 = new Box(200,300,50,50);
    World.add(world,this.body);
   } 
   screen() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
   }
}