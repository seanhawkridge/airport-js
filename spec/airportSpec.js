
describe("Airport", function() {

  beforeEach(function(){
    plane = new Airplane;
    airport = new Airport;
  });

  it("should initialize with a capacity of 15", function() {
    expect(airport.capacity).toEqual(15)
  });

  it("should initialize with an empty array", function() {
    expect(airport.planes).toEqual([])
  });

  it("should add a plane to its array", function() {
    airport.land_plane(plane)
    expect(airport.planes).toContain(plane)
  });

  it("should remove a plane from its array", function() {
    airport.send_plane(plane)
    expect(airport.planes).not.toContain(plane)
  });

});
