function Airport() {
  this.planes = [];
}
Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};
Airport.prototype.takeOff = function(plane) {
  var indexToDelete = this.planes.indexOf(plane)
  this.planes.slice(indexToDelete);
};


