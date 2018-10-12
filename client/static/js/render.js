let canvas
let ctx
let board = new Board()

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
  // board.getObjects().forEach(obj => {
  //   drawSquare(obj.x, obj.y)
  // })
  drawBoard()
}

function drawCar(car) {
  drawImage(car.image, car.x, car.y, car.rotation)
}

function drawSquare(x, y) {
  ctx.fillRect(x, y, 10, 10)
}

function drawImage(image, x, y, rotation=0) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(-rotation)
  ctx.translate(-x, -y)
  ctx.drawImage(image, x - (image.width / 2), y - (image.height / 2))
  ctx.restore()
}

function drawBoard() {
  console.log(board.tiles)
  for (let y = 0; y < board.tiles.length; y++) {
    for (let x = 0; x < board.tiles[y].length; x++) {
      if (board.tiles[y][x]) {
        console.log(board.tiles[y][x])
        drawImage(board.tiles[y][x], x * board.tileSize, y * board.tileSize)
      }
    }
  }
}
