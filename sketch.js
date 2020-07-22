var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper1,trashCan1,trashCan2,trashCan3;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(300,700,90,90);
	ground = new Ground(800,690,1600,20);
	trashCan1= new TrashCan(1550,590,20,180);
	trashCan2 = new TrashCan(1400,670,280,20);
	trashCan3= new TrashCan(1250,590,20,180);
	launcher = new Launcher(paper1.body,{x:300,y:500});
	keyPressed();
	mouseDragged();
}


function draw() {
  rectMode(CENTER);
  background(200);
  paper1.display();
  ground.display();
 
  trashCan3.display();
  launcher.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:540,y:-540});
 launcher.fly();
	}
}
function mouseDragged(){
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher.fly();
}

