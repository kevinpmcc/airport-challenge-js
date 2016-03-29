describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = {value: 'key'};
  });

  it('should be able to land', function(){
    expect(plane.land()).toBeTruthy();
  });
});

