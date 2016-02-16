function Airport() {
  this.capacity = 15;
  this.planes = [];
}

Airport.prototype.land_plane = function(plane) {
  plane.landed(this)
  this.planes.push(plane);
};

Airport.prototype.send_plane = function(plane) {
  plane.takeoff()
  this.planes.pop(plane);
};
