let images = ['PacMan1.png', 'PacMan2.png', 'PacMan3.png', 'PacMan4.png']
let pacmen = []
let animation_id = null
const create_pacman = (vertical_boundary, horizontal_boundary) => {
  let position_x = Math.floor(Math.random() * vertical_boundary);
  let position_y = Math.floor(Math.random() * horizontal_boundary);
  let velocity_x = Math.floor((Math.random() * 1) + 1);
  let velocity_y = Math.floor((Math.random() * 1) + 1);
  let img_index = 0
  let img = images[img_index]
  let direction = 1
  var div = document.createElement('img');
  div.classList.add("pacman")
  div.style.left = position_x + 'px';
  div.style.top = position_y + 'px';
  div.src = img
  div.width = "20"
  div.height = "20"
  return {
    vertical_boundary: vertical_boundary,
    horizontal_boundary: horizontal_boundary,
    position_x: position_x,
    position_y: position_y,
    velocity_x: velocity_x,
    velocity_y: velocity_y,
    img: img,
    direction: direction,
    div: div,
    img_index: img_index
  };
};
const detectCollisionWithVertical = (pacman) => {
  if (pacman.position_x > pacman.vertical_boundary) return true;
  if (pacman.position_x < 0) return true;
};

const detectCollisionWithHorizontal = (pacman) => {
  if (pacman.position_y > pacman.horizontal_boundary) return true;
  if (pacman.position_y < 0) return true;
};

const calculate_next_img = (actual_img) => {
  switch (actual_img) {
    case 0:
      return 1
    case 1:
      return 0
    case 2:
      return 3
    case 3:
      return 2
    default:
      return 0
  }
}

const move = (pacman) => {
  pacman.position_x += pacman.velocity_x * pacman.direction;
  // pacman.position_y += pacman.velocity_x * pacman.direction;
  pacman.div.style.left = `${pacman.position_x}px`
  pacman.div.style.top = `${pacman.position_y}px`
  var i = calculate_next_img(pacman.img_index)
  pacman.div.src = images[i]
  pacman.img_index = i
};

const change_direction = (pacman) => {
  if (detectCollisionWithVertical(pacman)||detectCollisionWithHorizontal(pacman)) {
    pacman.direction *= -1
  if(pacman.direction < 0)
    pacman.img_index = 2
  else
    pacman.img_index = 0
}
};
const make_one = () => {
  var pacman = create_pacman(document.body.clientWidth, document.body.clientHeight)
  pacmen.push(pacman)
  var game_area = document.getElementById("game_area")
  game_area.appendChild(pacman.div)
}

const make_many = () => {
  var number_of_pacmen = document.getElementById("pacmen-number").value
  console.log(number_of_pacmen)
  if (isNaN(number_of_pacmen)) {
    alert(`${number_of_pacmen} is not a number`)
    return
  }
  if (!Number.isInteger(Number.parseInt(number_of_pacmen))) {
    alert(`${number_of_pacmen} is not an integer`)
    return
  }
  for (let i = 0; i < number_of_pacmen; ++i) {
    make_one()
  }
}
const start = () => {
  pacmen.forEach(move)
  pacmen.forEach(change_direction)
  animation_id = window.requestAnimationFrame(start)
}

const stop = () => {
window.cancelAnimationFrame(animation_id)
} 

exports = {
  create_pacman,
  detectCollisionWithVertical,
  detectCollisionWithHorizontal,
  move,
  change_direction,
  make_one
};
