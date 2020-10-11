const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var g1,pig1,pig2,log1,log2,log3,log4,pig3,pig4,log5,log6,log7,log8;
var bird1;
function setup(){
    var canvas = createCanvas(12000,800);
    engine = Engine.create();
    world = engine.world;

   
    box1 = new Box(700,720,70,70);
    box2 = new Box(920,720,70,70);
    box3 = new Box(700,540,70,70);
    box4 = new Box(920,540,70,70);
    box5= new Box(810,490,70,70);

    g1 = new ground(600,height,1200,20);

    pig1 = new pig(810,750);
    pig2= new pig(810,520);

    log1 = new Log(810,560,300,PI/2);
    log2 = new Log(810,480,300,PI/2);
    log3 = new Log(760,420,150,PI/3);
    log4 = new Log(870,420,150,-PI/3);

    box5 = new Box(300,720,70,70);
    box6 = new Box(520,720,70,70);
    box7 = new Box(300,540,70,70);
    box8 = new Box(520,540,70,70);
    box9= new Box(410,490,70,70);

    g1 = new ground(600,height,12000,20);

    pig3 = new pig(410,750);
    pig4= new pig(410,520);

    log5 = new Log(410,560,300,PI/2);
    log6 = new Log(410,480,300,PI/2);
    log7 = new Log(360,420,150,PI/3);
    log8 = new Log(470,420,150,-PI/3);

    box10 = new Box(350,50,50,100);
    bird1 = new bird(200,400);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    g1.screen();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();

    box5.display();
    box6.display();
    
    pig3.display();
    log5.display();
    pig4.display();
    log6.display();
    box7.display();
    box8.display();
    box9.display();
    log7.display();
    log8.display();
    box10.display();
    bird1.display();
}