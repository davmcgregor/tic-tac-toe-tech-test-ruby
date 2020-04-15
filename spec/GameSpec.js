'use strict';

describe('Game', function() {
  var game
  var player_one
  var player_two

  beforeEach(function() {
    player_one = "Jack"
    player_two = "Jill"
    game = new Game(player_one, player_two);
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
      game.play([0,0]);
      expect(game.turn).toEqual(game.player_two);
    })

    it('should add a move to the grid', function(){
      game.play([0,0]);
      expect(game.board.grid[0][0]).toContain('X');
    })

    it('should return "Player 1 wins!" if the top row cells contain the same marker', function(){
      round1(game, [0,0], [1,0])
      round2(game, [0,1], [1,1])
      expect(function(){game.play([0,2]);}).toThrow("Player 1 wins!");
    })

    it('should return "Player 1 wins!" if the middle row cells contain the same marker', function(){
      playMoves(game, [1,0], [0,0], [1,1], [0,1])
      expect(function(){game.play([1,2]);}).toThrow("Player 1 wins!");
    })

    it('should return "Player 1 wins!" if the bottom row cells contain the same marker', function(){
      playMoves(game, [2,0], [0,0], [2,1], [0,1])
      expect(function(){game.play([2,2]);}).toThrow("Player 1 wins!");
    })

    it('should return "Player 1 wins!" if the left column cells contain the same marker', function(){
      playMoves(game, [0,0], [0,1], [1,0], [0,2])
      expect(function(){game.play([2,0]);}).toThrow("Player 1 wins!");
    })

    it('should return "Player 1 wins!" if the middle column cells contain the same marker', function(){
      playMoves(game, [0,1], [0,0], [1,1], [0,2])
      expect(function(){game.play([2,1]);}).toThrow("Player 1 wins!");
    })

    it('should return "Player 1 wins!" if the right column cells contain the same marker', function(){
      playMoves(game, [0,2], [0,0], [1,2], [0,1])
      expect(function(){game.play([2,2]);}).toThrow("Player 1 wins!");
    })

    it('should return "Player 1 wins!" if diagonal left to right contain the same marker', function(){
      playMoves(game, [0,0], [0,1], [1,1], [0,2])
      expect(function(){game.play([2,2]);}).toThrow("Player 1 wins!");
    })

    it('should return "Player 1 wins!" if diagonal right to left contain the same marker', function(){
      playMoves(game, [0,2], [0,0], [1,1], [0,1])
      expect(function(){game.play([2,0]);}).toThrow("Player 1 wins!");
    })
  })
});