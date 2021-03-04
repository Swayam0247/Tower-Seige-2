const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;


function preload(){
  polygonImg = loadImage("polygon.png")
}

function setup() {

  createCanvas(1600,800);
  engine =Engine.create();
  world = engine.world;
  
  stand1 = new Ground(800,700,600,25);
  
  block1 = new Block(655,657,50,60);
  block2 = new Block(705,657,50,60);
  block3 = new Block(755,657,50,60);
  block4 = new Block(805,657,50,60);
  block5 = new Block(855,657,50,60);
  block6 = new Block(905,657,50,60);
  block7 = new Block(955,657,50,60);
  block8 = new Block(705,597,50,60);
  block9 = new Block(755,597,50,60);
  block10 = new Block(805,597,50,60);
  block11= new Block(855,597,50,60);
  block12= new Block(905,597,50,60);
  block13 = new Block(755,537,50,60);
  block14 = new Block(805,537,50,60);
  block15 = new Block(855,537,50,60);
  block16 = new Block(805,477,50,60);
  
  stand2 = new Ground(1300,300,400,25);
  block17 = new Block(1300,257,50,60);
  block18 = new Block(1300,197,50,60);
  block19 = new Block(1300,137,50,60);
  block20 = new Block(1350,257,50,60);
  block21 = new Block(1400,257,50,60);
  block22 = new Block(1250,257,50,60);
  block23 = new Block(1200,257,50,60);
  block24 = new Block(1350,197,50,60);
  block25 = new Block(1250,197,50,60);

   polygon = Bodies.circle(200,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:300,y:400});

  Engine.run(engine);
}

function draw() {
background("#382C2C");  
 
stand1.display();
stand2.display();
slingshot.display()
fill("green");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("yellow");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("orange");
block13.display();
block14.display();
block15.display();
fill("red")
block16.display();

fill("purple")
block24.display();
block19.display();
block21.display();
block17.display();
fill("pink")
block22.display();
block23.display();
block25.display();
fill("blue")
block20.display();
block18.display();

imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,70,70)

drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}