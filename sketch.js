var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var all, plI, plII, plIII, plIV;

var ground;

var greg;

function preload() {
  greg = loadAnimation("images/greg_run_gif.gif");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  background("white");
  
  if(playerCount === 4) {
    game.update(1);
  }
  if(gameState === 1) {
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }

  drawSprites();
}