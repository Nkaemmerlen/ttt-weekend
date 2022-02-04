/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let isWinner, usedBlock, turn
let board = []


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.getElementById('message')
const theBoard = document.getElementById('board')
const allSquares = document.querySelectorAll(".square")
const tlSquare = document.getElementById('sq0')
const tmSquare = document.getElementById('sq1')
const trSquare = document.getElementById('sq2')
const mlSquare = document.getElementById('sq3')
const mmSquare = document.getElementById('sq4')
const mrSquare = document.getElementById('sq5')
const blSquare = document.getElementById('sq6')
const bmSquare = document.getElementById('sq7')
const brSquare = document.getElementById('sq8')




/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  messageEl.textContent="It is Player X's turn"
  isWinner = null
  turn = 1
  board = new Array(9).fill(null)
  const tlSquare = board[0]
  const tmSquare = board[1]
  const trSquare = board[2]
  const mlSquare = board[3]
  const mmSquare = board[4]
  const mrSquare = board[5]
  const blSquare = board[6]
  const bmSquare = board[7]
  const brSquare = board[8]
  render ()
}

