const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(1000, 500, 100, 100)
    box2 = new Box(1000,400,100,100)
    box3 = new Box(1000,300, 100, 100)
    box4 = new Box(1000,200,100,100)
    box5 = new Box(1000,100, 100, 100)

    ball1 = new ball(350, 50, 25)

    chain = new Chain(ball1.body, {x:850 , y: 50 })



}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display ()
    box2.display ()
    box3.display ()
    box4.display ()
    box5.display ()

    ball1.display ()

    chain.display ()

}
