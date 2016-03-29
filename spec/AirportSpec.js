describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = {value: 'key'};
  });

  it('will store a plane landed in planes', function(){
    airport.land(plane)
    expect(airport.planes).toContain(plane)
  });

  it('will not store a plane that has taken off', function(){
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).not.toContain(plane)
  });
});
