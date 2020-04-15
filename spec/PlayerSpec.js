'use strict';

describe('Player', function() {
  var player_one

  beforeEach(function() {
    player_one = new Player("Jack");
  });

  it('should be a defined object', function() {
    expect(player_one instanceof(Player)).toBe(true);
  });

  it('should have a name property', function(){
    expect(player_one.name).toBeDefined();
  })

});