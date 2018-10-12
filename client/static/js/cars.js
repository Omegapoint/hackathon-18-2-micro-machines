class Car {
  constructor(imageSrc) {
    this.id = Math.random()
    this.x = 0
    this.y = 0
    this.rotation = 0

    this.image = new Image()
    this.image.src = imageSrc
    this.loaded = false
    this.image.onload = () => {this.loaded = true}
  }
}

const myCar = new Car('graphics/blue-car.png')
const otherCars = [new Car('graphics/red-car.png')]

function startMovingCar() {
  setInterval(moveCar, 50)
}


function moveCar () {
  myCar.x += xVelocity
  if (myCar.x < 0) {
    myCar.x = 0
    xVelocity = 0
  } else if (myCar.x > canvas.width) {
    myCar.x = canvas.width
    xVelocity = 0
  }

  myCar.y += yVelocity
  if (myCar.y < 0) {
    myCar.y = 0
    yVelocity = 0
  } else if (myCar.y > canvas.height) {
    myCar.y = canvas.height
    yVelocity = 0
  }

  myCar.rotation = getDirection(myCar, xVelocity, -yVelocity)
  sendPosition()
}

function getDirection (car, xVelocity, yVelocity) {
  if (xVelocity === 0 && yVelocity === 0) {
    return car.rotation
  }
  return math.complex(xVelocity, yVelocity).arg()
}
