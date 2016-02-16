
describe("Airplane", function() {

  beforeEach(function(){
    plane = new Airplane;
    airport = new Airport;
  });

  it("should initialize on the ground", function() {
    expect(plane.airborne).toEqual(false)
    expect(plane.current_location).toEqual(null)
  });

  it("should be able to land", function() {
    plane.landed(airport)
    expect(plane.current_location).toEqual(airport)
    expect(plane.airborne).toEqual(false)

  });

  it("should be able to land", function() {
    plane.takeoff(airport)
    expect(plane.current_location).toEqual(null)
    expect(plane.airborne).toEqual(true)
  });

});
