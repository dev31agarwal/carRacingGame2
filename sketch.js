var database, form, gameState=0, playerCount=0;
var player, allPlayers;

function setup(){

  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth-10, windowHeight-10);

 game= new Game();
 game.start();
}

function draw(){
  if(playerCount===4){
    gameState=1;
  }

  if(gameState===1){
    game.play();
  }
}
