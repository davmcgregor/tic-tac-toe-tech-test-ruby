(function(exports) {

  function Game(player_one, player_two, board = new Board()) {
    this.board = board;
    this.player_one = player_one;
    this.player_two = player_two;
    this.turn = player_one;
  }

  Game.prototype = {
    play: function(position){
      if (this.board.isFree(position)) {
        this.board.grid[position[0]][position[1]].push(this.turn.marker);
      } else {
        throw "Square taken";
      };
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
      for (i = 0; i < 3; i++) {
        if (this.board.winningRow(i)) {
          this.rowWinner(i);
        } else if (this.board.winningCol(i)) {
          this.colWinner(i);
        } else if (this.board.winningDiag()) {
          this.diagWinner();
        }
      }
    },
    rowWinner: function(i){
      if (this.board.grid[i][0][0] == this.player_one.marker) {
        throw "Player 1 wins!";
      } else {
        throw "Player 2 wins!";
      }
    },
    colWinner: function(i){
      if (this.board.grid[0][i][0] == this.player_one.marker) {
        throw "Player 1 wins!";
      } else {
        throw "Player 2 wins!";
      }
    },
    diagWinner: function(){
      if (this.board.grid[1][1][0] == this.player_one.marker) {
        throw "Player 1 wins!";
      } else {
        throw "Player 2 wins!";
      }
    }

  };

  exports.Game = Game;

})(this);