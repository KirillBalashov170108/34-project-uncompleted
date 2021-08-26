const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let world;
let engine;
var canvas;
var revolver;

function preload() {
bg_img = loadImage('background.png');
revolver = loadImage('revolver.png');
}

function setup() {
  createCanvas(600,700);
 
  engine = Engine.create();
  world = engine.world;
  
  revolver1=createSprite(320,50,10,10);
   
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  
  Engine.update(engine);
  drawSprites();
}

