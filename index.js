let message = "";
let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

function startGame() {
    if (sum <= 20) {
        message = "Do you need a new card?"
    } else if(sum === 21) {
        message = "Blackjack"
    }else{
        message = "You out of the game"
    }
    console.log(message)
}