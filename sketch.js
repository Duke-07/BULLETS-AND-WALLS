var car1, car2, car3, car4, wall1, wall2, wall3, wall4;
var speed, weight;
var border1, border2, border3;


function setup() {
  createCanvas(800, 680);

  speed = 30;
  weight = 3000;

  car1 = createSprite(50, 80, 20, 10);
  car1.velocityX = speed + 30;
  car1.shapeColor = "white";

  car2 = createSprite(50, 250, 20, 10);
  car2.velocityX = speed + 20;
  car2.shapeColor = "pink";

  car3 = createSprite(50, 430, 20, 10);
  car3.velocityX = speed + 10;
  car3.shapeColor = "purple";

  car4 = createSprite(50, 600, 20, 10);
  car4.velocityX = speed;
  car4.shapeColor = "cyan";


  wall1 = createSprite(750, 70, 15, 55);
  wall2 = createSprite(750, 255, 15, 60);
  wall3 = createSprite(750, 430, 15, 65);
  wall4 = createSprite(750, 600, 15, 60);


  border1 = createSprite(400, 160, 900, 10);
  border1.shapeColor = "white";

  border2 = createSprite(400, 340, 900, 10);
  border2.shapeColor = "white";

  border3 = createSprite(400, 520, 900, 10);
  border3.shapeColor = "white";


}

function draw() {
  background(0);

  if (wall1.x - car1.x < car1.width / 2 + wall1.width / 2) {
    car1.x = 735;

    var defor1 = 0.5 * (weight + 1000) * (speed + 30) * (speed + 30) / 22509;
    if (defor1 > 110) {
      car1.shapeColor = "red";
      fill("red");
      textSize(20);
      text("THIS WALL IS NOT PROTECTIVE!!", 50, 100);
    }

    if (defor1 < 110 && defor1 > 70) {
      car1.shapeColor = "orange";
    }

    if (defor1 < 70 && defor1 > 50) {
      car1.shapeColor = "yellow";
    }

    if (defor1 < 50) {
      car1.shapeColor = "lime";
    }
  }

  if (wall2.x - car2.x < car2.width / 2 + wall2.width / 2) {
    car2.x = 735;

    var defor2 = 0.01 * (weight - 2500) * speed + 10 / 2000;
    if (defor2 > 150) {
      car2.shapeColor = "red";
    }

    if (defor2 < 180 && defor2 > 70) {
      car2.shapeColor = "orange";
      fill("orange");
      textSize(20);
      text("THIS WALL IS LESS PROTECTIVE!!", 50, 250);
    }

    if (defor2 < 70 && defor2 > 50) {
      car2.shapeColor = "yellow";
    }

    if (defor2 < 50) {
      car2.shapeColor = "lime";
    }


  }

  if (wall3.x - car3.x < car3.width / 2 + wall3.width / 2) {
    car3.x = 735;

    var defor3 = 0.05 * weight - 13 * speed + 10 * speed + 10 / 22509;
    if (defor3 > 150) {
      car3.shapeColor = "red";
    }

    if (defor3 < 180 && defor3 > 70) {
      car3.shapeColor = "orange";
    }

    if (defor3 < 70 && defor3 > 50) {
      car3.shapeColor = "yellow";
      fill("yellow");
      textSize(20);
      text("THIS WALL IS PROTECTIVE!!", 50, 440);
    }

    if (defor3 < 50) {
      car3.shapeColor = "lime";
    }


  }

  if (wall4.x - car4.x < car4.width / 2 + wall4.width / 2) {
    car4.x = 735;

    var defor4 = 0.5 * weight - 1000 * speed + 20 * speed + 20 / 22509;

    if (defor4 > 150) {
      car4.shapeColor = "red";
    }

    if (defor4 < 180 && defor4 > 70) {
      car4.shapeColor = "orange";
    }

    if (defor4 < 70 && defor4 > 50) {
      car4.shapeColor = "yellow";
    }

    if (defor4 < 50) {
      car4.shapeColor = "lime";
      fill("lime");
      textSize(20);
      text("THE BEST WALL!!", 50, 600);
    }
  }



  drawSprites();
}