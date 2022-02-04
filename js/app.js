/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let winner, usedBlock, turn
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
  messageEl.textContent="It is Player 1's turn!"
  winner = null
  turn = 1
  board = [null, 1, null, -1, 1, null, null, 1, null]
  render ()
}


function render(){
  board.forEach(function(newSq, idx){
    let xoColor
    let xoLetter
    console.log(newSq, idx)
  
  if(newSq === null){
    xoLetter = ''
    xoColor = 'gray'
  }
  if(newSq === 1){
    console.log('one')
    xoLetter = 'X'
    allSquares[idx].textContent = 'X'
    xoColor = 'maroon'
    messageEl.style.color = 'maroon'
  }
  if(newSq === -1){
    console.log('neg one')
    xoColor = 'darkblue'
    xoLetter = 'O'
    allSquares[idx].textContent = 'O'
    messageEl.style.color = 'darkblue'
  }
  if(winner === 1){
    messageEl.style.background = 'maroon'
  } 
  if(winner === -1){
    messageEl.style.background = 'darkblue'
  }
  
})
  if(!winner){
    messageEl.textContent = `It is ${turn === 1 ? "Player 1's" : "Player 2's"} turn, Please select and empty box!`
  }
  else if(winner === 'T'){
    messageEl.textContent = "Its a tie! nobody likes that.. Try again!"
  }
  else if(winner){
    messageEl.textContent = `Congratulations!!! ${winner === 1 ? "player 1" : "Player 2"} has won!`
  }
}

const winningBoard = [
  [board[0], board[1], board[2]]
  [board[3], board[4], board[5]]
  [board[6], board[7], board[8]]
  [board[0], board[3], board[6]]
  [board[1], board[4], board[7]]
  [board[2], board[5], board[8]]
  [board[0], board[4], board[8]]
  [board[2], board[4], board[6]]
]