'use strict';

describe('Player', function() {
  var player_one

  beforeEach(function() {
    player_one = new Player("Jack", "X");
  });

  it('should be a defined object', function() {
    expect(player_one instanceof(Player)).toBe(true);
  });

  it('should have a name property', function(){
    expect(player_one.name).toBeDefined();
  })

  it('should have the correct name property', function(){
    expect(player_one.name).toBe("Jack");
  })

  it('should have a marker property', function(){
    expect(player_one.marker).toBeDefined();
  })

  it('should have the correct marker property', function(){
    expect(player_one.marker).toBe("X");
  })

});