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
      for (i = 0; i < 3; i++) {
        if (this.winningRow(i) || this.winningCol(i)) {
          throw "Game over!";
        }
      }
      if (this.compareDiagonalLeftRight() && this.notEmptyCentre()) {
        throw "Game over!";
      }
      if (this.compareDiagonalRightLeft() && this.notEmptyCentre()) {
        throw "Game over!";
      }
    },

    compareCells: function(cell_one, cell_two){
      return JSON.stringify(this.board.grid[cell_one[0]][cell_one[1]]) == JSON.stringify(this.board.grid[cell_two[0]][cell_two[1]])
    },


    compareRow: function(row_number){
      return this.compareCells([row_number,0], [row_number,1]) && this.compareCells([row_number,1], [row_number,2]);
    },
    notEmptyRow: function(row_number){
      return this.board.grid[row_number][0][0] == "X" || this.board.grid[row_number][0][0] == "O";
    },
    winningRow: function(row_number){
      return this.compareRow(row_number) && this.notEmptyRow(row_number);
    },

    compareCol: function(col_number){
      return this.compareCells([0, col_number], [1, col_number]) && this.compareCells([1, col_number], [2, col_number]);
    },  
    notEmptyCol: function(col_number){
      return this.board.grid[0][col_number][0] == "X" || this.board.grid[0][col_number][0] == "O";
    },
    winningCol: function(col_number){
      return this.compareCol(col_number) && this.notEmptyCol(col_number)
    },

    compareDiagonalLeftRight: function(){
      return this.compareCells([0,0], [1,1]) && this.compareCells([1,1], [2,2])
    },
    compareDiagonalRightLeft: function(){
      return this.compareCells([0,2], [1,1]) && this.compareCells([1,1], [2,0])
    },
    notEmptyCentre: function(){
      return this.board.grid[1][1][0] == "X" || this.board.grid[1][1][0] == "O";
    }
  }

  exports.Game = Game;

})(this);