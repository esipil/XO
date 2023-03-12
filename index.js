let Player1 = true


//player 1 will always take X 
const one = document.getElementById('one')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const player = document.getElementById('player')

const numbers = [one, two, three, four, five, six, seven, eight, nine]

numbers.forEach((item) => {
    item.addEventListener('click', function ()  {
        // Player1 = false
        // console.log(Player1)
        if (Player1 === true ) {
            item.textContent = 'x'
            Player1 = false
        }else {
            item.textContent = 'o'
            Player1 = true
        }
         Player1 == true ? player.textContent = 'Player 1' : player.textContent= 'Player 2'
    })
} )


