class TrashCan {
    constructor(x,y,width,height){
       var options = {
           isStatic : true,
        
       }
       this.body = Matter.Bodies.rectangle(x,y,width,height,options);
       this.width = width+250;
       this.height = height;
       this.image = loadImage("sprites/dustbingreen.png");
       World.add(world,this.body)
    }
 display(){
     var pos = this.body.position
     push();
     imageMode(RIGHT)
     image(this.image,pos.x+50,pos.y-140,this.width,this.height+50)
     pop;
 }
      
    
}