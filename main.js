var size;
var r;
var cX;
var cY;
var particleS;
var time = 0;
var chargeTime = 25;
//var chargeTime = 0;
var shootTime = -chargeTime;
var eatTime = 0;
var shooter;
var score = 10;
var enemeyScore = 10;
var img;
var bk;

var numStars = 5;
var starSpawnTime = 100;

var numFood = 2;
var foodSpawnTime = 300;

var stars = [];
var food;

var level;
var levels = [];
var levelNum = 1;
var maxLevelNum = 1;

//[particle, index of enemy]
var particles = [];

function setup() {
    createCanvas(640*1.25, 480*1.25);
    size = 10;
    angle = 0;
    cX = width / 2;
    cY = (height - size * sqrt(3));
    
    img = loadImage("fish.png");  // Load the image
    open = loadImage("openFish.png");
    bk = loadImage("background.png");
    
    shooter = new Shooter(cX, cY, size, angle);
    particleS = new ParticleSystem(createVector(0,0), angle);
    stars.push(loadImage("purple.png"));
    stars.push(loadImage("blue.png"));
    food = loadImage("food.png");
    level = new Level(1);
//    levels.push(level);
}

function draw() {
    background(bk);

    //Controls changes position of shooter
    controls(particleS);
    
//    levels[levels.length-1].run();
    level.run();
    
    if (level.won()){
        levelNum++;
//        particles = [];
        level = new Level(levelNum);
//        levels.push(new Level(2));
//        console.log("" + levels[levels.length-1].won());
    }
    
    if (score < 0) {
        translate(0, 100);
        textSize(100);
        text("Game Over", 10, 30);
        frameRate(1);
//        remove();
    }
//    
//        console.log(levelNum+"");
//        console.log(maxLevelNum+"");
    
//        console.log(level.won() && (levelNum <= maxLevelNum+"");
    //Incremen"t time
    time++;
}

