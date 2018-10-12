let canvas
let ctx

function start() {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  setInterval(renderCars, 50)
}


function renderCars () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawCar(otherCars[0])
  if (myCar.loaded) {
    drawCar(myCar)
  }
}

function drawCar(car) {
  drawImage(car.image, car.x, car.y, car.rotation)
}

function drawImage(image, x, y, rotation) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(-rotation)
  ctx.translate(-x, -y)
  ctx.drawImage(image, x - (image.width / 2), y - (image.height / 2))
  ctx.restore()
}
