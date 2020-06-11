
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,case1,case2,case3,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	ground = createSprite(width/2,height-50,width,20);
	ground.shapeColor = "purple";

	case1 = createSprite(1000,height-70,150,20);
	case1.shapeColor = "red";

	case2 = createSprite(1085,height-120,20,120);
	case2.shapeColor = "red";

	case3 = createSprite(915,height-120,20,120);
	case3.shapeColor = "red";



	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  }

function draw() {

 background("black");
 Engine.update(engine);
 ball = ellipse(width/3,height-80,40),
 drawSprites();
 
	}
	function KeyPressed(){

	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.03,y:-0.3})

	}

}