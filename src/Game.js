(function(exports) {

  function Game(player_one, player_two, board = new Board()) {
    this.board = board;
    this.player_one = player_one;
    this.player_two = player_two;
    this.turn = player_one;
  }

  Game.prototype = {
    play: function(position){
      this.board.grid[position[0]][position[1]].push(this.turn.marker);
      this.switchPlayer();
    },

    switchPlayer: function(){
      if(this.turn == this.player_one) {
        this.turn = this.player_two
      } else {
        this.turn = this.player_one;
      }
    }

  }

  exports.Game = Game;

})(this);