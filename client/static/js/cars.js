class Car {
  constructor(imageSrc) {
    this.id = Math.random()
    this.x = 0
    this.y = 0
    this.rotation = 0
    this.speed = 0
    this.turn = 0.1
    this.maxSpeed = 30
    this.brake = 3

    this.image = new Image()
    this.image.src = imageSrc
    this.loaded = false
    this.image.onload = () => {this.loaded = true}

    this.score = 0

    this.scoreIncrementer()
  }

  scoreIncrementer() {
    setInterval(() => this.score += 100, 100)
    setInterval(() => sendScore(), 50)
  }
}

const myCar = new Car('graphics/blue-car.png')
const otherCars = [new Car('graphics/red-car.png')]

function startMovingCar() {
  setInterval(moveCar, 50)
}


function moveCar () {
  const x = myCar.x
  const y = myCar.y

  const polarDiff = math.complex({r: myCar.speed, phi: myCar.rotation})
  myCar.x += polarDiff.re
  myCar.x = myCar.x < myCar.image.width ? myCar.image.width : myCar.x
  myCar.x = myCar.x > canvas.width - myCar.image.width ? canvas.width - myCar.image.width : myCar.x
  myCar.y -= polarDiff.im
  myCar.y = myCar.y < myCar.image.width ? myCar.image.width : myCar.y
  myCar.y = myCar.y > canvas.height - myCar.image.width ? canvas.height - myCar.image.width : myCar.y

  if (board.isMovable(boundingRect(myCar.x, myCar.y, myCar.image))) sendPosition()
  else {
    console.log('was not movable')
    myCar.speed = 0
    myCar.x = x
    myCar.y = y
    sendPosition()
  }
}

function boundingRect(x, y, image) {
  return {
    left: x - image.width / 2,
    right: x + image.width / 2,
    top: y - image.height / 2,
    bottom: y + image.height / 2,
  }
}
