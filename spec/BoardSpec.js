'use strict';

describe('Board', function() {
  var board
  var grid

  beforeEach(function() {
    board = new Board();
    grid = [ [[],[],[]], [[],[],[]], [[],[],[]] ]
  });

  it('should be a defined object', function() {
    expect(board instanceof(Board)).toBe(true);
  });

  it('should have a grid property', function(){
    expect(board.grid).toBeDefined();
  })

  it('should have the correct grid property', function(){
    expect(board.grid).toEqual(grid);
  })

  describe('#isFree', function(){
    var board;

    beforeEach(function(){
      board = new Board();
    });

    it('should return false if a marker already exists in a cell', function() {
      board.grid[0][0].push("X");
      expect(board.isFree([0,0])).toEqual(false);
    });
  });
});