let Player1 = true


//player 1 will always take X 
const square = document.querySelectorAll('.square')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const winner = document.getElementById('winner')

const player = document.getElementById('player')
let gameStatus = 'play'
const numbers = [one, two, three, four, five, six, seven, eight, nine]

// const winCombination = [
//     [0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6]
// ]


square.forEach((item) => {
    // item.setAttribute('data-value', index)
    item.addEventListener('click', function ()  {
        // const value = square.getAttribute('data-value');
        // Player1 = false
        console.log(item.indexOf)
        if (Player1 === true && gameStatus === 'play' ) {
            item.textContent = 'X'
            Player1 = false
        }else if (Player1 ===false && gameStatus === 'play'){
            item.textContent = 'O'
            Player1 = true
        }else {
            null
        }
        if (
            (square[0].textContent !== '' &&
            square[0].textContent === square[1].textContent &&
            square[1].textContent === square[2].textContent) ||
            (square[3].textContent !== '' &&
            square[3].textContent === square[4].textContent &&
            square[4].textContent === square[5].textContent) ||
            (square[6].textContent !== '' &&
            square[6].textContent === square[7].textContent &&
            square[7].textContent === square[8].textContent) ||
            (square[0].textContent !== '' &&
            square[0].textContent === square[3].textContent &&
            square[3].textContent === square[6].textContent) ||
            (square[1].textContent !== '' &&
            square[1].textContent === square[4].textContent &&
              square[4].textContent === square[7].textContent) ||
            (square[2].textContent !== '' &&
            square[2].textContent === square[5].textContent &&
            square[5].textContent === square[8].textContent) ||
            (square[0].textContent !== '' &&
            square[0].textContent === square[4].textContent &&
            square[4].textContent === square[8].textContent) ||
            (square[2].textContent !== '' &&
            square[2].textContent === square[4].textContent &&
            square[4].textContent === square[6].textContent)
          ) {
            Player1 == true
              ? (winner.textContent = 'PLAYER TWO WINS')
              : (winner.textContent = 'PLAYER ONE WINS');
            gameStatus = 'gameOver';
          } else {           
            gameStatus = 'play'
        }
         Player1 == true ? player.textContent = 'Player 1' : player.textContent= 'Player 2'
    })
} )

console.log(square)

// ((one.textContent === 'X' && two.textContent === 'X' && three.textContent === 'X' && four.textContent=== 'X' && five.textContent === 'X' && six.textContent === 'X' && seven.textContent === 'X' && eight.textContent === 'X'  && nine.textContent === 'X') || (one.textContent === 'O' && two.textContent === 'O' && three.textContent === 'O'&& four.textContent=== 'O' && five.textContent === 'O' && six.textContent === 'O' && seven.textContent === 'O' && eight.textContent === 'O' && nine.textContent === 'O') )
