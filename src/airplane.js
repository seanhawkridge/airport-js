function Airplane() {
  this.airborne = false
  this.current_location = null
}

Airplane.prototype.landed = function(airport) {
  this.current_location = airport
  this.airborne = false
};

Airplane.prototype.takeoff = function() {
  this.current_location = null
  this.airborne = true
};
