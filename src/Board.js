(function(exports) {

  function Board() {
    this.grid = [ [[],[],[]], [[],[],[]], [[],[],[]] ];
  }
  Board.prototype = {
    isFree: function(position){
      return this.grid[position[0]][position[1]].length === 0;
    },
    compareCells: function(cell_one, cell_two, cell_three){
      return (JSON.stringify(this.grid[cell_one[0]][cell_one[1]]) === JSON.stringify(this.grid[cell_two[0]][cell_two[1]])) && (JSON.stringify(this.grid[cell_two[0]][cell_two[1]]) === JSON.stringify(this.grid[cell_three[0]][cell_three[1]]))
    },
    compareRow: function(row_number){
      return this.compareCells([row_number,0], [row_number,1], [row_number,2]);
    },
    notEmptyRow: function(row_number){
      return this.grid[row_number][0][0] === "X" || this.grid[row_number][0][0] === "O";
    },
    winningRow: function(row_number){
      return this.compareRow(row_number) && this.notEmptyRow(row_number);
    },
    compareCol: function(col_number){
      return this.compareCells([0, col_number], [1, col_number], [2, col_number])
    },  
    notEmptyCol: function(col_number){
      return this.grid[0][col_number][0] === "X" || this.grid[0][col_number][0] === "O";
    },
    winningCol: function(col_number){
      return this.compareCol(col_number) && this.notEmptyCol(col_number)
    },
    compareDiagonalLeftRight: function(){
      return this.compareCells([0,0], [1,1], [2,2] )
    },
    compareDiagonalRightLeft: function(){
      return this.compareCells([0,2], [1,1], [2,0])
    },
    notEmptyCentre: function(){
      return this.grid[1][1][0] === "X" || this.grid[1][1][0] === "O";
    },
    winningDiag: function(){
      return ((this.compareDiagonalLeftRight() || this.compareDiagonalRightLeft()) && this.notEmptyCentre())
    }
  };

  exports.Board = Board;

})(this);