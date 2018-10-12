const updatePeriod = 50 // ms

let up = false
let down = false
let left = false
let right = false

let xVelocity = 0
let yVelocity = 0

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
    yVelocity--
  }

  if (down) {
    yVelocity++
  }

  if (left) {
    xVelocity--
  }

  if (right) {
    xVelocity++
  }
}

function friction() {

  if (!up && !down) {
    if (yVelocity < 0) {
      yVelocity++
    } else if (yVelocity > 0) {
      yVelocity--
    }
  }

  if (!left && !right) {
    if (xVelocity < 0) {
      xVelocity++
    } else if (xVelocity > 0) {
      xVelocity--
    }
  }
}
