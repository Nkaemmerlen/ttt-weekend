/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let winner, turn
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
const form = document.querySelector('form')




/*----------------------------- Event Listeners -----------------------------*/
tlSquare.addEventListener('click', handleClick)
tmSquare.addEventListener('click', handleClick)
trSquare.addEventListener('click', handleClick)
mlSquare.addEventListener('click', handleClick)
mmSquare.addEventListener('click', handleClick)
mrSquare.addEventListener('click', handleClick)
blSquare.addEventListener('click', handleClick)
bmSquare.addEventListener('click', handleClick)
brSquare.addEventListener('click', handleClick)
form.addEventListener("reset", init)


/*-------------------------------- Functions --------------------------------*/
init()
// init function for base state of the game
function init() {
  messageEl.textContent= ""
  winner = null
  turn = 1
  allSquares.textContent = ""
  board = [null, null, null, null, null, null, null, null, null]
  render ()
}

// updating appearance depending on each factor of the game. turn/who selected which/ winner
function render(){
  board.forEach(function(newSq, idx){
  if(newSq === null){
    allSquares[idx].textContent = ''
  }
  if(newSq === 1){
    allSquares[idx].textContent = 'X'
    allSquares[idx].style.color = 'rgb(252, 191, 73)'
  }
  if(newSq === -1){
    allSquares[idx].textContent = 'O'
    allSquares[idx].style.color = 'rgb(214, 40, 40)'

  }
})
  if(!winner){
    messageEl.textContent = `It is ${turn === 1 ? "Player 1's" : "Player 2's"} turn, Please select and empty box!`
  if(turn === 1){
    messageEl.style.color = 'rgb(252, 191, 73)'
  }
  if(turn === -1){
    messageEl.style.color = 'rgb(214, 40, 40)'
  }
  }
  else if(winner === 'T'){
    messageEl.textContent = "Its a tie! nobody likes that.. Try again!"
  }
  else if(winner){
    messageEl.textContent = `Congratulations!!! ${winner === 1 ? "player 1" : "Player 2"} has won!`
    confetti.start(2000)
  }
}
// rotating turn order and linking the selected square idx
function handleClick(click){
  let clickedSquare = parseInt(click.target.id.slice(-1))
  if(board[clickedSquare] || winner){
    return
  }
  board[clickedSquare] = turn
  turn *= -1
  winner = getWinner()
  render()
  getWinner()
}
//the winning combos in absolute values to determine if there is a winner or tied game, or if the game is still in progress
function getWinner(){
  if (Math.abs(board[0] + board[1] + board[2]) === 3){
    return board[0]
  }
  if (Math.abs(board[3] + board[4] + board[5]) === 3){
    return board[3]
  }
  if (Math.abs(board[6] + board[7] + board[8]) === 3){
    return board[6]
  }
  if (Math.abs(board[0] + board[3] + board[6]) === 3){
    return board[0]
  }
  if (Math.abs(board[1] + board[4] + board[7]) === 3){
    return board[1]
  }
  if (Math.abs(board[2] + board[5] + board[8]) === 3){
    return board[2]
  }
  if (Math.abs(board[0] + board[4] + board[8]) === 3){
    return board[0]
  }
  if (Math.abs(board[2] + board[4] + board[6]) === 3){
    return board [2]
  }
  if (!board.includes(null)){
    return 'T'
  } else {
    return null
  }
}
// const winningBoards = [
//   [board[0], board[1], board[2]],
//   [board[3], board[4], board[5]],
//   [board[6], board[7], board[8]],
//   [board[0], board[3], board[6]],
//   [board[1], board[4], board[7]],
//   [board[2], board[5], board[8]],
//   [board[0], board[4], board[8]],
//   [board[2], board[4], board[6]]
// ]