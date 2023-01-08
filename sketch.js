 const Engine = Matter.Engine;
 const Render = Matter.Render;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 const Body = Matter.Body;
 const Composites = Matter.Composites;
 const Composite = Matter.Composite;

 
 var fruit;
 var fruit2;
 var fruit3;
 var rope1;
 var rope2;
 var rope3;
 var bgimg;
 var bob;
 var bob1;
 var bobsprite;
 var food;
 var button1;
 var button2;
 var button3;

 function preload(){
  bob = loadAnimation("bob.png")
  bob1 = loadAnimation("bobOpenmouth.png")
  food = loadImage("wotermelon.png")
  bgimg = loadImage("background.png")
 }
 function setup() 
 {
  createCanvas(windowWidth,windowHeight-5);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  //button1
  button1 = createImg('buttonesa.png')
  button1.position(20,1 + 29,50,50)
  button1.size(50,50)
  button1.mouseClicked(drop)
  
  //button 2
  button2 = createImg('buttonesa.png')
  button2.position(350,1 + 39,50,50)
  button2.size(50,50)
  button2.mouseClicked(drop2)
  
  //button3
  button3 = createImg('buttonesa.png')
  button3.position(380,1 + 224,50,50)
  button3.size(50,50)
  button3.mouseClicked(drop3)

  rope1 = new Rope(7,{x:40,y:30});
  rope2 = new Rope(5,{x:370,y:40});
  rope3 = new Rope(3,{x:400,y:320});
  ground = new Ground(200,windowHeight-5,2700,20);
  bobsprite = createSprite(170,displayHeight / 1.33,100,100)
  bobsprite.scale = 0.1;
  bobsprite.addAnimation("bob",bob)
  bobsprite.addAnimation("bob1",bob1)
  fruit = Bodies.circle(95,300,20)
  Matter.Composite.add(rope1.body,fruit)
  fruit1 = new link(rope1,fruit)
  Matter.Composite.add(rope2.body,fruit)
  fruit2 = new link(rope2,fruit)
  Matter.Composite.add(rope3.body,fruit)
  fruit3 = new link(rope3,fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
 }

 function draw() 
 {
  background(51);
  image(bgimg,0,0,displayWidth + 80, displayHeight)
  if (fruit != null){
  
    image(food,fruit.position.x,fruit.position.y,70,70)
    
    
 }
  ground.show();
  rope1.show();
  rope2.show();
  rope3.show();
  Engine.update(engine);
  drawSprites()
  
 if (collide(fruit,bobsprite,80)==true){
    World.remove(engine.world,fruit);
    fruit = null;
    bobsprite.changeAnimation(bob1);
 }
 
 }
    function drop() {
    rope1.break();
    fruit1.dettach();
    fruit1 = null;
   }
    function drop2() {
    rope2.break();
    fruit2.dettach();
    fruit2 = null;
   }
    function drop3() {
    rope3.break();
    fruit3.dettach();
    fruit3 = null;
   }
 function collide(body,sprite,x){
 if (body != null){
  var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
  if (d<= 80){
  World.remove(engine.world,fruit);
  fruit = null;
  return true;
 }
 else{return false}
 }







 }