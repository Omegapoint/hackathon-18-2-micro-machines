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
  }
}

const myCar = new Car('graphics/blue-car.png')
const otherCars = [new Car('graphics/red-car.png')]

function startMovingCar() {
  setInterval(moveCar, 50)
}


function moveCar () {
  const polarDiff = math.complex({r: myCar.speed, phi: myCar.rotation})
  console.log(polarDiff)
  myCar.x += polarDiff.re
  myCar.x = myCar.x < myCar.image.width ? myCar.image.width : myCar.x
  myCar.x = myCar.x > canvas.width - myCar.image.width ? canvas.width - myCar.image.width : myCar.x
  myCar.y -= polarDiff.im
  myCar.y = myCar.y < myCar.image.width ? myCar.image.width : myCar.y
  myCar.y = myCar.y > canvas.height - myCar.image.width ? canvas.height - myCar.image.width : myCar.y
  sendPosition()
}
