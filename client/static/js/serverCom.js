
const TYPE_POSITION = 'POSITION'
const TYPE_SCORE = 'SCORE'


// Create WebSocket connection.
const socket = new WebSocket('ws://192.168.43.183:8080/micromachines/mm')

// Connection opened
socket.addEventListener('open', function (event)  {
  startMovingCar()
})

// Listen for messages
socket.addEventListener('message', function (event) {
  const msg = JSON.parse(event.data)
  if (msg.type == TYPE_POSITION) updateOtherCarPositions(msg)
  else if (msg.type == TYPE_SCORE) updateOtherScores(msg)
})

function updateOtherCarPositions(car) {
  otherCars[0].x = car.x
  otherCars[0].y = car.y
  otherCars[0].rotation = car.rotation
}

function updateOtherScores(scores) {
  otherCars[0].score = scores.score
  const scoreBoard =  document.getElementById('scores')
  scoreBoard.innerHTML = ''
  const you = document.createElement('li')
  const other = document.createElement('li')
  you.innerText = `You: ${myCar.score}`
  other.innerText = `Them: ${scores.score}`

  if (scores.score > myCar.score) {
    scoreBoard.appendChild(other)
    scoreBoard.appendChild(you)
  } else {
    scoreBoard.appendChild(you)
    scoreBoard.appendChild(other)
  }
  document.appendChild(scoreBoard)
}

function sendPosition() {
  const request_object = {
    type: TYPE_POSITION,
    id: myCar.id,
    x: myCar.x,
    y: myCar.y,
    rotation: myCar.rotation,
  }
  socket.send(JSON.stringify(request_object))
}

function sendScore() {
  const request_object = {
    type: TYPE_SCORE,
    id: myCar.id,
    score: myCar.score,
  }
  socket.send(JSON.stringify(request_object))
}
