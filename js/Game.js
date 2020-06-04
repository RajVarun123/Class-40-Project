class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    plI = createSprite(100, 300);
    plI.addAnimation("grege", greg);
    plI.scale = 0.13;
    plII = createSprite(100, 300);
    plII.addAnimation("grege", greg);
    plII.scale = 0.13;
    plIII = createSprite(100, 300);
    plIII.addAnimation("grege", greg);
    plIII.scale = 0.13;
    plIV = createSprite(100, 300);
    plIV.addAnimation("grege", greg);
    plIV.scale = 0.13;

    all = [plI, plII, plIII, plIV];
  }

  play() {

    player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y = 175;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index++;

        //position the cars a little away from each other in x direction
        y += 200;
        //use data form the database to display the cars in y direction
        x = displayWidth + allPlayers[plr].distance;
        all[index-1].x = x;
        all[index-1].y = y;

        if (index === player.index){
          fill("red");
          ellipse(x, y, 90,90);
          
          all[index - 1].shapeColor = "red";
          camera.position.x = all[index-1].x;
          camera.position.y = displayHeight - 90;
        }
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance += 10;
      player.update();
    }

    if(player.distance === 4000) {
      game.update(2);
    }

    drawSprites();
  }

  end() {
    form.ending.show();
  }
}