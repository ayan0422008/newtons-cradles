const Engine = Matter .Engine;    
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine;
var world;
var object;
var roof1;

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

roof1=new roof(400,65,400,20)
bob1=new Bob(250,280,50)
bob2=new Bob(350,280,50)
bob3=new Bob(450,280,50)
bob4=new Bob(550,280,50)
//create rope objects here 
rope1=new rope(bob1.body,{x:250,y:80})
}

function draw() {
  background(0);  
  Engine.update(engine)
roof1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
//display rope objects
rope1.display()
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-390,y:-385});

  }
}