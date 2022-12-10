var wizard, wizardImg, player, playerImg, blueGem, blueGemImg, ruby, rubyImg, greenGem, greenGemImg

var collisionSound, winSound, loseSound, gemSound, coinSound;

var border1, border2, border3, wall1, wall2, wall3

var coin, coin2, coin3

var speed = 5;

var s = 1;

var wallCapacity = 2;

var wallCapacity2 = 2;

var wallCapacity3 = 2;

var gemCount = 0;

var deathCount = 0;

var bg;

var level1, level2, level3

function preload(){
  wizardImg = loadImage("wizard.png");
  playerImg = loadImage("player.png");
  blueGemImg = loadImage("blueGem.png");
  rubyImg = loadImage("ruby.png");
  greenGemImg = loadImage("greenGem.png");
  coinImg = loadImage("coin.png");
  bg = loadImage("BG.jpeg");

  collisionSound = loadSound("die.mp3");
  coinSound = loadSound("checkpoint.mp3");
  gemSound = loadSound("sad.wav");
}

function setup(){
  createCanvas(1400, 700);

  border1 = createSprite(1180, 40, 10, 280);

  border2 = createSprite(1180, 330, 10, 240);

  border3 = createSprite(1180, 600, 10, 215);

  wizardBorder = createSprite(1300, 600, 10, 215);

  wall1 = createSprite(700, 200, 1400, 45);

  wall2 = createSprite(700, 458, 1400, 24);

  wall3 = createSprite(700, 484, 1400, 30);

  level1 = new Group();
  level2 = new Group();
  level3 = new Group();

  //1

  var ob1 = createSprite(400, 40, 10, 80);
  ob1.shapeColor = "red";
  level1.add(ob1);

  var ob2 = createSprite(650, 140, 10, 80);
  ob2.shapeColor = "red";
  level1.add(ob2);

  var ob3 = createSprite(900, 40, 10, 80);
  ob3.shapeColor = "red";
  level1.add(ob3);

  //2

  var ob4 = createSprite(400, 300, 10, 80);
  ob4.shapeColor = "red";
  level2.add(ob4);

  var ob5 = createSprite(600, 400, 10, 80);
  ob5.shapeColor = "red";
  level2.add(ob5);

  var ob6 = createSprite(800, 300, 10, 80);
  ob6.shapeColor = "red";
  level2.add(ob6);

  var ob7 = createSprite(1000, 400, 10, 80);
  ob7.shapeColor = "red";
  level2.add(ob7);

  //3

  var ob8 = createSprite(250, 550, 10, 80);
  ob8.shapeColor = "red";
  level3.add(ob8);

  var ob9 = createSprite(400, 650, 10, 80);
  ob9.shapeColor = "red";
  level3.add(ob9);

  var ob10 = createSprite(600, 550, 10, 80);
  ob10.shapeColor = "red";
  level3.add(ob10);

  var ob11 = createSprite(800, 650, 10, 80);
  ob11.shapeColor = "red";
  level3.add(ob11);

  var ob12 = createSprite(1000, 550, 10, 80);
  ob12.shapeColor = "red";
  level3.add(ob12);

  coinGroup = new Group();
  coinGroup2 = new Group();
  coinGroup3 = new Group();

  wizard = createSprite(1350, 625, 40, 40);
  wizard.addImage(wizardImg);
  wizard.scale = 0.3;

  player = createSprite(80, 80, 40, 40);
  player.addImage(playerImg);
  player.scale = 0.15;

  blueGem = createSprite(1240, 40, 40, 40);
  blueGem.addImage(blueGemImg);
  blueGem.scale = 0.2;

  ruby = createSprite(1240, 340, 40, 40);
  ruby.addImage(rubyImg);
  ruby.scale = 0.2;

  greenGem = createSprite(1240, 640, 40, 40);
  greenGem.addImage(greenGemImg);
  greenGem.scale = 0.2;

  //coin

  var x = Math.round(random(500, 1100))

  coin = createSprite(x, 40, 20, 20);
  coin.addImage(coinImg);
  coin.scale = 0.075;
  coinGroup.add(coin);

  var y = Math.round(random(500, 1100))

  coin2 = createSprite(y, 340, 20, 20);
  coin2.addImage(coinImg);
  coin2.scale = 0.075;
  coinGroup2.add(coin2);

  var z = Math.round(random(500, 1100))

  coin3 = createSprite(z, 640, 20, 20);
  coin3.addImage(coinImg);
  coin3.scale = 0.075;
  coinGroup3.add(coin3);
}

function draw(){
  background(50);

  image(bg, 0, 0, 1400, 700);

  drawSprites();

  noStroke();
  textSize(25);
  fill("white");
  text("Gems Obtained: " + gemCount, 50, 50);


  noStroke();
  textSize(22);
  fill("white");
  text("Attempts : " + deathCount, 30, 20);

  if (coinGroup.isTouching(player)){
    coinGroup.destroyEach(coin);
    wallCapacity = wallCapacity - 1;
    speed = speed + 2;
    coins();
    coinSound.play();
  }

    if (wallCapacity <=0){
      border1.destroy();
    }

  if (coinGroup2.isTouching(player)){
    coinGroup2.destroyEach(coin2);
    wallCapacity2 = wallCapacity2 - 1;
    speed = speed + 2;
    coins2();
    coinSound.play();
  }

    if (wallCapacity2 <=0){
      border2.destroy();
    }

    if (coinGroup3.isTouching(player)){
      coinGroup3.destroyEach(coin3);
      wallCapacity3 = wallCapacity3 - 1;
      speed = speed + 2;
      coins3();
      coinSound.play();
    }

      if (wallCapacity3 <=0){
        border3.destroy();
      }

      if (blueGem.isTouching(player)){
        blueGem.destroy();
        level1.destroyEach();
        gemCount = gemCount + 1;
        player.x = 80;
        player.y = 340;
        gemSound.play();
      }

      if (ruby.isTouching(player)){
        ruby.destroy();
        level2.destroyEach();
        wall1.destroy();
        wall2.destroy();
        gemCount = gemCount + 1;
        player.x = 80;
        player.y = 640;
        gemSound.play();
      }

      if (greenGem.isTouching(player) && deathCount < 5){
        greenGem.destroy();
        level3.destroyEach();
        coinGroup.destroyEach();
        coinGroup2.destroyEach();
        coinGroup3.destroyEach();
        wizardBorder.destroy();
        wall3.destroy();
        gemCount = gemCount + 1;
      }

      if (deathCount > 4){
        wizard.destroy();
        blueGem.destroy();
        ruby.destroy();
        greenGem.destroy();
        level1.destroyEach();
        level2.destroyEach();
        level3.destroyEach();
        coinGroup.destroyEach();
        coinGroup2.destroyEach();
        coinGroup3.destroyEach();
        wall1.destroy();
        wall2.destroy();
        wall3.destroy();
        border1.destroy();
        border2.destroy();
        border3.destroy();
        wizardBorder.destroy();

        noStroke();
        textSize(50)
        fill("red")
        text("You failed my mission. Try again...", 400, 350);
      }

      if (wall1.isTouching(player)){
        player.x = 80;
        player.y = 40;
        deathCount = deathCount + 1;
        collisionSound.play();
      }

      if (wall2.isTouching(player)){
        player.x = 80;
        player.y = 340;
        deathCount = deathCount + 1;
        collisionSound.play();
      }

      if (wall3.isTouching(player)){
        player.x = 80;
        player.y = 640;
        deathCount = deathCount + 1;
        collisionSound.play();
      }

      if (border1.isTouching(player)){
        player.x = 80;
        player.y = 40;
      }

      if (border2.isTouching(player)){
        player.x = 80;
        player.y = 340;
      }

      if (border3.isTouching(player)){
        player.x = 80;
        player.y = 640;
      }

      if (level1.isTouching(player)){
        deathCount = deathCount + 1;
        player.x = 80;
        player.y = 80;
        collisionSound.play();
      }

      if (level2.isTouching(player)){
        deathCount = deathCount + 1;
        player.x = 80;
        player.y = 340;
        collisionSound.play();
      }

      if (level3.isTouching(player)){
        deathCount = deathCount + 1;
        player.x = 80;
        player.y = 640;
        collisionSound.play();
      }

      if (wizard.isTouching(player)){
        wizard.x = 650;
        wizard.y = 350;
        s = 2;
      }

      if (s === 2){
        noStroke();
        textSize(50)
        fill("gold")
        text("You win!", 700, 350);
      }
  

  if (keyDown(UP_ARROW)){
    player.y = player.y - speed;
  }

  if (keyDown(DOWN_ARROW)){
    player.y = player.y + speed;
  }

  if (keyDown(LEFT_ARROW)){
    player.x = player.x - speed;
  }

  if (keyDown(RIGHT_ARROW)){
    player.x = player.x + speed;
  }
  
}

function coins(){
  var x = Math.round(random(500, 1100))

  coin = createSprite(x, 40, 20, 20);
  coin.addImage(coinImg);
  coin.scale = 0.075;
  coinGroup.add(coin);
}

function coins2(){
  var y = Math.round(random(500, 1100))

  coin2 = createSprite(y, 340, 20, 20);
  coin2.addImage(coinImg);
  coin2.scale = 0.075;
  coinGroup2.add(coin2);
}

function coins3(){
  var z = Math.round(random(500, 1100))

  coin3 = createSprite(z, 640, 20, 20);
  coin3.addImage(coinImg);
  coin3.scale = 0.075;
  coinGroup3.add(coin3);
}