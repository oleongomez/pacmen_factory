const create_pacman = (vertical_boundary, horizontal_boundary) => {
  let position_x = Math.floor(Math.random() * vertical_boundary);
  let position_y = Math.floor(Math.random() * horizontal_boundary);
  let velocity_x = Math.floor(Math.random() * 5);
  let velocity_y = Math.floor(Math.random() * 5);
  let img = 'PacMan1.png'
  let direction = 1

  return {
    position_x: position_x,
    position_y: position_y,
    velocity_x: velocity_x,
    velocity_y: velocity_y,
    img: img,
    direction: direction
  };
};
const detectCollisionWithVertical = (vertical_boundary, pacman) => {
  if (pacman.position_x > vertical_boundary) return true;
  if (pacman.position_x < 0) return false;
};

const detectCollisionWithHorizontal = (horizontal_boundary, pacman) => {
  if (pacman.position_y > horizontal_boundary) return true;
  if (pacman.position_y < 0) return false;
};

const move = (pacman) => {
  pacman.position_x += pacman.velocity_x;
  pacman.position_y += pacman.velocity_y;
};

const change_direction = (vertical_boundary, pacman) => {
  if(detectCollisionWithVertical(horizontal_boundary, pacman))
    pacman.direction = 0
};

module.exports = {
  create_pacman,
  detectCollisionWithVertical,
  detectCollisionWithHorizontal,
  move,
  change_direction
};
