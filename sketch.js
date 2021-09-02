const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var dem;


function setup() {
  canvas = createCanvas(1200, 500);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   blk = new Base1(900,300,200,150)
   blk2 = new Playerbase(100,300,200,150)
   plyr1 = new Stkmn(180,170,50,150)
   plyr2 = new Stkmn(980,170,50,150)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", 600, 50);

   //Display Playerbase and computer base 
   blk.display()
   blk2.display()
   plyr1.display()
   plyr2.display()


   //display Player and computerplayer


}
