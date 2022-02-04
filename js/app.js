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
  board = [null, null, null, null, null, null, null, null, null]
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
    xoColor = 'maroon'
    messageEl.style.color = 'maroon'
  }
  if(newSq === -1){
    console.log('neg one')
    xoColor = 'darkblue'
    xoLetter = 'O'
    messageEl.style.color = 'darkblue'
  }
  if(winner === 1){
    messageEl.style.background = xoColor
  } 
  if(winner === -1){
    messageEl.style.background = xoColor
  }
  
})
  if(turn){
    messageEl.textContent = `It is ${turn === 1 ? "Player 1's" : "Player 2's"} turn, Please select and empty box!`
  }
  else if(winner === 'T'){
    messageEl.textContent = "Its a tie! nobody likes that.. Try again!"
  }
  else if(winner){
    messageEl.textContent = `Congratulations!!! ${winner === 1 ? "player 1" : "Player 2"} has won!`
  }
}