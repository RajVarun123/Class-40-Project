class Form {

  constructor() {
    this.ending = createElement("h2");
  }
  
  display(){

    var input = createInput("Name");
    var button = createButton("Start");
    var greeting = createElement('h2');
    var title = createElement('h1');
    var restart = createButton("Restart");
    var restartMessage = createElement("h2");
    restartMessage.html("Kindly reload the page to restart");

    title.html("Hurdle Game");
    title.position(displayWidth/2 - 50, 0);

    this.ending.html("Congratulations, you won !!");
    this.ending.position(displayWidth/2 - 70, displayHeight/4);
    this.ending.hide();
    
    input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    button.position(displayWidth/2 + 30, displayHeight/2);

    restart.position(displayWidth - 100, 20);

    restartMessage.position(displayWidth/2 - 70, displayHeight/4);

    restartMessage.hide();

    button.mousePressed(function() {
      input.hide();
      button.hide();
      greeting.hide();
      title.hide();
      player.name = input.value();
      playerCount++;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      greeting.html("Hello, " + player.name);
      greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    restart.mousePressed(function() {
      game.update(0);
      player.updateCount(0);
      restartMessage.show();

      database.ref("players/player1").set({
        name: "",
        distance: 0
      });

      database.ref("players/player2").set({
        name: "",
        distance: 0
      });

      database.ref("players/player3").set({
        name: "",
        distance: 0
      });

      database.ref("players/player4").set({
        name: "",
        distance: 0
      });

      input.hide();
      button.hide();
      greeting.hide();
      title.hide();
    });
  }
}