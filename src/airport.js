function Airport() {
  this.capacity = 15;
  this.planes = [];
}

Airport.prototype.land_plane = function(plane) {
  if (this.planes.length < this.capacity) {
  plane.landed(this);
  this.planes.push(plane);
  } else {
    alert('airport is full');
  };
};

Airport.prototype.send_plane = function(plane) {
  plane.takeoff()
  this.planes.pop(plane);
};
