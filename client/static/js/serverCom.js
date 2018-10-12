
// Create WebSocket connection.
const socket = new WebSocket('ws://192.168.43.183:8080/micromachines/mm')

// Connection opened
socket.addEventListener('open', function (event)  {
  startMovingCar()
})

// Listen for messages
socket.addEventListener('message', function (event) {
  const car = JSON.parse(event.data)
  otherCars[0].x = car.x
  otherCars[0].y = car.y
  otherCars[0].rotation = car.rotation
})

function sendPosition() {
  socket.send(JSON.stringify({id: myCar.id , x: myCar.x, y: myCar.y, rotation: myCar.rotation}))
}
