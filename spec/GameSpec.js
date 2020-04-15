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
});