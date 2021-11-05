var dragon,dragonImg
var fireball,fireballImg
var flag,flagImg
var gameOver,gameOverImg
var spike,spikeImg
var prince,princeImg
var princess,princessImg
var rockwall,rockwallImg
var startarrow,startarrowImg
var youwin,youwinImg
var castle,castleImg

// function  preload() {
// dragonImg=loadImage("dragon.png")
// fireballImg=loadImage("frieball.png")
// flagImg=loadImage("flag.png")
// gameOverImg=loadImage("gameOver.png")
// spikeImg=loadImage("spike.png")
// princeImg=loadImage("prince.png")
// princessImg=loadImage("princess.png")
// rockwallImg=loadImage("./rockwall.png")
// startarrowImg=loadImage("startarrow.png")
// youwinImg=loadImage("youwin.png")
// castleImg=loadImage("castle.png")
// }

function setup() {
    var canvas=createCanvas(1200,400);
 

prince=createSprite(60,190,20,20);
//prince.addImage("prince",princeImg)
prince.scale=0.3;


}

function draw() {
 background(0)  
fill("white") 
text(mouseX+","+mouseY,mouseX,mouseY)
spawnrockwall();
drawSprites();
}

function spawnrockwall() {
    if(frameCount%60===0){
        var rockwall=createSprite(60,250,30,30);
        rockwall.y= Math.round(random(80,120));
        rockwall.addImage(rockwallImg);
        rockwall.scale=0.5;
        rockwall.velocityX=-3;

        rockwall.lifetime = 200;
    }
}









