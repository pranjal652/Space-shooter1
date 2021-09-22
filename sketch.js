
var spaceShip,enemyShip,asteroid,fuel,asteroid1,enemyShipimg,asteroidimg,spaceShipimg,asteroid1img,fuelimg,bgimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	spaceShipimg = loadImage("spaceShip.jpg");
	enemyShipimg = loadImage("images.jpg");
	fuelimg = loadImage("fuel.jpg");
	bgimg = loadImage("unnamed.jpg");
	asteroidimg = loadImage("asteroid1.jpg");
	asteroid1img = loadImage("asteroid2.jpg");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	asteroid = createSprites(100,100,50,50);
	asteroid1 = createSprites();
	fuel = createSprites();
	spaceShip = createSprites();
	enemyShip = createSprites();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



