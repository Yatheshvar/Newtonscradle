
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
  world = engine.world;
  bobDiameter=40;
  startbobPositionX= width/2;
  startbobPositionY= height/4+500;
  //bobObject1=new Bob(startbobPositionX-bobDiameter*2,startbobPositionY,bobDiameter);
   //bobObject2=new Bob(startbobPositionX-bobDiameter,startbobPositionY,bobDiameter);
    //bobObject3=new Bob(startbobPositionX,startbobPositionY,bobDiameter); 
    //bobObject4=new Bob(startbobPositionX+bobDiameter,startbobPositionY,bobDiameter);
   // bobObject5=new Bob(startbobPositionX+bobDiameter*2,startbobPositionY,bobDiameter);
  
  roofObject= new Roof(555,200,225,20);
	bobObject1= new Bob(475,400);
  bobObject2= new Bob(515,400);
  bobObject3= new Bob(555,400);
  bobObject4= new Bob(595,400);
  bobObject5= new Bob(635,400);
  rope1= new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
  rope2= new Rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
  rope3= new Rope(bobObject3.body,roofObject.body,bobDiameter*0,0);
  rope4= new Rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
  rope5= new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    console.log("is working");
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:50,y:-45});
	}
}

