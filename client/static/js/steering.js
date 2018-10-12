const updatePeriod = 50 // ms

let up = false
let down = false
let left = false
let right = false

document.addEventListener('keydown', keydown)
document.addEventListener('keyup', keyup)

function keydown(event) {

  if (event.repeat)
    return

  switch (event.code) {
    case 'ArrowUp':
      up = true
      break
    case 'ArrowDown':
      down = true
      break
    case 'ArrowLeft':
      left = true
      break
    case 'ArrowRight':
      right = true
      break
  }
}

function keyup(event) {
  switch (event.code) {
    case 'ArrowUp':
      up = false
      break
    case 'ArrowDown':
      down = false
      break
    case 'ArrowLeft':
      left = false
      break
    case 'ArrowRight':
      right = false
      break
  }
}

setInterval(updateVelocity, updatePeriod)

function updateVelocity() {
  drive()
  friction()
}

function drive() {
  if (up) {
    myCar.speed++
    myCar.speed = myCar.speed > myCar.maxSpeed ? myCar.maxSpeed : myCar.speed
  }

  if (down) {
    myCar.speed -= myCar.brake
    myCar.speed = myCar.speed < 0 ? 0 : myCar.speed
  }

  if (left) {
    myCar.rotation += Math.PI * myCar.turn
  }

  if (right) {
    myCar.rotation -= Math.PI * myCar.turn
  }
}

function friction() {

  if (!up && !down) {
    myCar.speed--
    myCar.speed = myCar.speed < 0 ? 0 : myCar.speed
  }
}
