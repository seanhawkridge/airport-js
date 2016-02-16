
describe("Airport", function() {

  beforeEach(function(){
    p1 = new Airplane;
    p2 = new Airplane;
    p3 = new Airplane;
    airport = new Airport;
  });

  it("should initialize with a capacity of 15", function() {
    expect(airport.capacity).toEqual(15)
  });

  it("should initialize with an empty array", function() {
    expect(airport.planes).toEqual([])
  });

  it("should add a plane to its array", function() {
    airport.land_plane(p1)
    expect(airport.planes).toContain(p1)
  });

  it("should remove a plane from its array", function() {
    airport.send_plane(p1)
    expect(airport.planes).not.toContain(p1)
  });

  it("should raise an alert when the airport is full", function(){
    spyOn(window, 'alert');
    airport.capacity = 2
    airport.land_plane(p1);
    airport.land_plane(p2);
    airport.land_plane(p3);
    expect(window.alert).toHaveBeenCalledWith('airport is full');
  });

});
