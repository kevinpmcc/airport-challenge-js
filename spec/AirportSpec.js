describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = {value: 'key'};
  });

  it('should be able to land a plane', function(){
    expect(airport.land(plane)).toBeTruthy();
  });
});
