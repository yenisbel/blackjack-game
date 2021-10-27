let message = "";
let firstCard = randomCard();
let secondCard = randomCard();
let cards = [firstCard, secondCard];
//let cardsDeck = cards.fill(Math.floor(Math.random() * 10) + 1);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isDead = false;
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("result");
let cardEl = document.getElementById("card");

function startGame(){
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += `${cards[i]} `;
    }
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
        message = "Do you want a new card?";
    } else if(sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true
    }else{
        message = "Sorry, you're out of the game!"
        isDead = true
    }
    messageEl.textContent = message;

}

function randomCard(){
    return Math.floor(Math.random() * 10) + 2
}

function newCard(){
    let otherCard = randomCard();
    sum += otherCard;
    cards.push(otherCard);
    renderGame()
}