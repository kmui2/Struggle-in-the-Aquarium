var Level = function(level) {
    this.level = level;
    this.numStars = 1 + level;
    this.animalS = new AnimalSystem();
    this.foodS = new FoodSystem();
    this.allSpawned = false;
    score = 10;
}

Level.prototype.run = function() {
    //animals   
//    if(time %1000){
//        console.log( time < (starSpawnTime*this.numStars) + "");
//    }
//    if(time % starSpawnTime == 0 && this.animalS.animals <= this.numStars)
//        this.animalS.addAnimal();
    

    //Display Shooter
    shooter.update(this.animalS.animals);
    
    //PARTICLES
    particleS.update(createVector(cX, cY), angle-PI/2);
    particleS.run();
    
    
    while (this.animalS.animals.length < this.numStars && !this.allSpawned)
        this.animalS.addAnimal();
    
    this.allSpawned = true;
    this.animalS.update();
    this.animalS.run(particleS);
    
    
    //food   
    if(time % foodSpawnTime == 0)
        this.foodS.addFood();
    this.foodS.update();
    this.foodS.run(particleS);
    
    //score
    rect(0, 0, 200, 32, 20);
    textSize(32);
    text("Hero " + score + "", 10, 30);
    
    //level number
    rect(width - 200, 0, width + 100, 32, 20);
    push();
    translate(width-200, 0);
    textSize(32);
    text("Level " + this.level + "", 10, 30);
    pop();  
}

Level.prototype.won = function() {
    return this.animalS.numDead == this.numStars;
}