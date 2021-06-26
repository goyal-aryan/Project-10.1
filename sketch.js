var pathImg;
var jakeImg;
var path;
var jake;
var block1;
var block2;

function preload() {
    //to pre-load images
    pathImg = loadImage("path.png");
    jakeImg = loadAnimation("jake1.png", "jake2.png", "jake3.png",                                     "jake4.PNG", "jake5.png");
}

function setup() {
    // to create canvas
    createCanvas(400, 400);
    //jake = new Jake()

    //create edge here
    edges = createEdgeSprites();

    // to create path, to move and resize it
    path = createSprite(200, 200);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale = 1.2;
  
    // to create Jake and resize it
    jake = createSprite(100, 100);
    jake.addAnimation("jack", jakeImg);
    jake.scale = 0.5;
  
    // to create block1 and make it invisible
    block1 = createSprite(30, 200, 30, 400);
    block1.visible = false;
  
    // to create block2 and make it invisible
    block2 = createSprite(370, 200, 30, 400);
    block2.visible = false;

}

function draw() {
    // to give background
    background(0);
  
    //to repeat background image
    if (path.y > 400) {
        path.y = height / 2;
    }
  
    // to move jack on X-axis with mouse
    jake.x = mouseX;
    jake.y = 100;

    jake.display();

    // to collide Jack with block 1 and block 2
     jake.collide(block1);
     jake.collide(block2);
  
    // to create display all sprites
    drawSprites();

}

