var playMoves = function(game, one, two, three, four) {
  game.play(one);
  game.play(two);
  game.play(three);
  game.play(four);
};

var round1 = function(game, Player1First, Player2First){
  game.play(Player1First);
  game.play(Player2First);
}

var round2 = function(game, Player1Second, Player2Second){
  game.play(Player1Second);
  game.play(Player2Second);
}
