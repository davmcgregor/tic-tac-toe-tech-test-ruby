'use strict';

describe('Game', function() {
  var game

  beforeEach(function() {
    game = new Game();
  });

  it('should be a defined object', function() {
    expect(game instanceof(Game)).toBe(true);
  });
});