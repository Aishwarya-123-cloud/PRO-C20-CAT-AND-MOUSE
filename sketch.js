var tom, jerry , garden;
var tomImage1, tomImage2, tomImage3,jerryImage1,jerryImage2, jerryImage3, gardenImage;

function preload() {
    //load the images here
   tomImage1 = loadImage("images/tomOne.png");
   tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
   tomImage3 = loadAnimation("images/tomFour.png");
   jerryImage1 = loadImage("images/jerryOne.png");
   jerryImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
   jerryimage3 = loadAnimation ("images/jerryFour.png");
   gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(680,400);
    //create tom and jerry sprites here
    tom = createSprite(500,340,20,100);
    tom.addImage("tom", tomImage1);
    

    jerry = createSprite(200,340,10,40);
    jerry.addImage("jerry", jerryImage1);
    

    garden = createSprite(340,200)
    garden.addImage("garden", gardenImage);
   
}

function draw() {

    console.log(tom.x - jerry.x);
    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < tom.width / 2 - jerry.width / 2) {
        tom.velocityX = 0;
        tom.addAnimation("tomImg4", tomImg4);
        tom.changeAnimation("tomImg4");
        tom.x = 300;
 
        jerry.addAnimation("jerryImage4", jerryImage4);
        jerry.changeAnimation("jerryImage4");
        tom.bounce(jerry);
     }
 
     drawSprites();
 }
 
function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
 
    tom.velocityX = -5;
    tom.addAnimation("tomImage2", tomImage2);
    tom.changeAnimation("tomImage2");

    jerry.addAnimation("jerryImage2", jerryImage2);
    jerry.changeAnimation("jerryImage2");
}

}



