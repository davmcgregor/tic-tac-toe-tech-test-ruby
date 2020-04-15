'use strict';

describe('Game', function() {
  var game

  beforeEach(function() {
    game = new Game("Jack", "Jill");
  });

  it('should be a defined object', function() {
    expect(game instanceof(Game)).toBe(true);
  });

  it('should have a board property', function(){
    expect(game.board instanceof(Board)).toBe(true);
  })

  it('should have two player properties', function(){
    expect(game.player_one).toBeDefined();
    expect(game.player_two).toBeDefined();
  })

  it('should have a turn property to indicate current player', function(){
    expect(game.turn).toBeDefined();
  })

  it('should start with the correct turn property', function(){
    expect(game.turn).toEqual(game.player_one);
  })

  describe ('#play', function(){

    var game;
    var player_one;
    var player_two;

    beforeEach(function(){
      player_one = new Player("Jack", "X")
      player_two = new Player("Jill", "O")
      game = new Game(player_one, player_two);
    })

    it('should change the turn property', function(){
      game.play([0,1]);
      expect(game.turn).toEqual(game.player_two);
    })

    it('should add a move to the grid', function(){
      game.play([0,1]);
      expect(game.board.grid[0][1]).toContain('X');
    })
  })
});