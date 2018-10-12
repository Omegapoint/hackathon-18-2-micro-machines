let canvas
let ctx

function start() {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  setInterval(paintWorld, 50)
}

function paintWorld() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  renderCars()
  renderObjects()
}

function renderCars () {
  drawCar(otherCars[0])
  if (myCar.loaded) {
    drawCar(myCar)
  }
}

function renderObjects() {
  board.getObjects().forEach(obj => {
    drawSquare(obj.x, obj.y)
  })
}

function drawCar(car) {
  drawImage(car.image, car.x, car.y, car.rotation)
}

function drawSquare(x, y) {
  ctx.fillRect(x, y, 10, 10)
}

function drawImage(image, x, y, rotation) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(-rotation)
  ctx.translate(-x, -y)
  ctx.drawImage(image, x - (image.width / 2), y - (image.height / 2))
  ctx.restore()
}
