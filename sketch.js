var forestBg;
var bunny,man,hunter,apartment,forest1,watchman,man_run,man_walk,room,start,play;
var gameState = "start";
function preload(){
  forestBg = loadImage("CodeFiles/forestmid.jpg");
  bunny=loadImage("CodeFiles/bunny.gif");
  start = loadImage("CodeFiles/start.jpg");
  play = loadImage("CodeFiles/play.jpg");
}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(forestBg);  
  if(gameState==="start"){
    menu = new Menu();
    menu.display();
  }
}