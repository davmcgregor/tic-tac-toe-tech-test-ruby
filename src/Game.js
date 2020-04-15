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
      this.checkWin();
      this.switchPlayer();
    },

    switchPlayer: function(){
      if(this.turn == this.player_one) {
        this.turn = this.player_two
      } else {
        this.turn = this.player_one;
      }
    },

    checkWin: function(){
      if (this.compareCells([0,0], [0,1]) && this.compareCells([0,1], [0,2])) {
        throw "Game over!";
      }
    },

    compareCells: function(cell_one, cell_two){
      return JSON.stringify(this.board.grid[cell_one[0]][cell_one[1]]) == JSON.stringify(this.board.grid[cell_two[0]][cell_two[1]])
    }

  }

  exports.Game = Game;

})(this);