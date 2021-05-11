const pacmen = require("./pacmen.js");
describe("create_pacman", () => {
  it("should return not void pacman", () => {
    expect(pacmen.create_pacman()).not.toBeUndefined();
  });
  it("should have properties", () => {
    expect(pacmen.create_pacman()).toHaveProperty("position_x");
    expect(pacmen.create_pacman()).toHaveProperty("position_y");
    expect(pacmen.create_pacman()).toHaveProperty("velocity_x");
    expect(pacmen.create_pacman()).toHaveProperty("velocity_y");
    expect(pacmen.create_pacman()).toHaveProperty("img")
    expect(pacmen.create_pacman()).toHaveProperty("direction")

  });
  it("should initialize random positions less than bounding box", () => {
    expect(pacmen.create_pacman(800, 600).position_x).toBeLessThanOrEqual(800);
    expect(pacmen.create_pacman(800, 600).position_y).toBeLessThanOrEqual(600);
    expect(pacmen.create_pacman(800, 600).velocity_x).toBeLessThanOrEqual(5);
    expect(pacmen.create_pacman(800, 600).velocity_y).toBeLessThanOrEqual(5);
  });
});
describe("detectCollisionWithVertical", () => {
  it("should invert velocity when reaches vertical wall", () => {
    let pacman = pacmen.create_pacman(800,600)
    pacman.position_x = 801
    expect(pacmen.detectCollisionWithVertical(800,pacman)).toBe(true);
    pacman.position_x = -1
    expect(pacmen.detectCollisionWithVertical(800,pacman)).toBe(false);
  });
});
describe("detectCollisionWithHorizontal", () => {
  it("should invert velocity when reaches horizontal wall", () => {
    let pacman = pacmen.create_pacman(800,600)
    pacman.position_y = 601
    expect(pacmen.detectCollisionWithHorizontal(600,pacman)).toBe(true);
    pacman.position_y = -1
    expect(pacmen.detectCollisionWithHorizontal(600,pacman)).toBe(false);
  });
describe("move",() => {
    it('position must be different after moved', () => {
       pacman = pacmen.create_pacman(800,600)
       pos_x = pacman.position_x
       pos_y = pacman.position_y
       pacmen.move(pacman)
       expect(pacman.position_x).not.toEqual(pos_x)
       expect(pacman.position_y).not.toEqual(pos_y)

    })
})
describe("changeDirection", () => {
    it('must change direction when hit a boundary', ()=>{
      pacman = pacmen.create_pacman(800,600)
      expect(pacmen.change_direction(pacman)).toBe(1)
      pacman.position_x = 801
      expect(pacmen.change_direction(pacman)).toBe(0)
    })
})
});
