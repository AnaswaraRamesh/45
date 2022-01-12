var board, boardImg;
var angle =0;
var engine, world;
var ball1;
var bowlImg;
var stick1, stick2, stick3;
var ballLeftStick, ballRightStick
var score = 0;
var i = 0.1;
var PLAY = 0
var END = 1
var gameState = PLAY

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload(){
  boardImg = loadImage("images/board.png");
  bowlImg = loadImage("images/bowl.png");
}
function setup() {
  
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  stickAngle = PI;

  // board = createSprite(470, 300, 50, 50);
  // board.addImage(boardImg);
  
  ballLeftStick = Matter.Bodies.rectangle(440, 490, 40, 5,{angle:PI/5, isStatic:true});
  World.add(world,ballLeftStick);
  ballRightStick = Matter.Bodies.rectangle(634, 490, 40, 5,{angle:-PI/5, isStatic:true});
  World.add(world,ballRightStick);

  
  stick1 = new Horizontalstick(390,100,400,24,PI);
  stick2 = new Horizontalstick(740,220,400,24,PI);
  stick3 = new Verticalstick(470,300,200,24,PI/3);
   Matter.Body.setAngle(stick3.body,PI/7);
   

  ball1 = new Ball(220,0);

  var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Matter.Render.run(render);
  
}

function draw() {
  background(255); 
text(mouseX+","+mouseY,mouseX,mouseY)
stroke('black')
push();
strokeWeight(3)
textSize(15)
text("Score : "+ score, 806,42)
pop();
  

  Engine.update(engine);
 
  //BACKGROUND

//   if(keyIsDown(RIGHT_ARROW)){
//     push();

//     translate(400, 200);
//     i= i+0.01
//     rotate(i);
//     imageMode(CENTER);
//     image(boardImg, 0,0, 700,500)

  
 
//  pop();
// }
// if(keyIsDown(LEFT_ARROW)){
//   push();

//   translate(400, 200);

// pop();
// }
  
  
  // console.log("angle"+stick1.body.angle);
    // imageMode(CENTER);
    // image(boardImg, 400, 200, 50, 50);


  // if(keyDown(RIGHT_ARROW)){
    
  //   push();

  //   translate(400, 200);

  //   rotate(angle = angle + 0.05);
  //   // imageMode(CENTER);
  //   // image(boardImg, 0, 0, 50, 50);
  //   board.addImage(boardImg);
  //   pop();
  // }
  // if(keyDown(LEFT_ARROW)){
  //   rotate(angle = angle-0.5);
  // }

  
  stick1.display();
  stick2.display();
  stick3.display();
  ball1.display();

  // rectMode(CENTER);
  // rect(ballRightStick.position.x, ballRightStick.position.y, 40, 5)
  imageMode(CENTER);
 image(bowlImg, 530, 490, 250, 40);
}