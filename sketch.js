const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;

function preload()
{

}

function setup() 
{
	createCanvas(480, 800);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	// ground
	ground = new Ground (240, 800, 480, 10);

	// walls
	wall1 = new Ground(5, 400, 10, 800);
	wall2 = new Ground(475, 400, 10, 800);

	for (var k = 0; k <=width; k = k + 80) {
	   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}

	for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  wall1.display();
  wall2.display();

  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   if(frameCount % 60 === 0){
	particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
	
  }

 for (var j = 0; j < particles.length; j++) {
  
	particles[j].display();
  }

  drawSprites();
 
}




