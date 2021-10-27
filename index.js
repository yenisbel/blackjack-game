let playerEl = document.getElementById("player");
let customerName = prompt("Enter your name", "");
if (customerName!= null) {
    playerEl.innerHTML = customerName;
}else{
    customerName = "IAM"
}

let player = {
    name: customerName,
    coins: 0
}
let message = "";
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isDead = false;
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("result");
let cardEl = document.getElementById("card");

playerEl.textContent = `Player: ${player.name} $${player.coins}`;

function startGame(){
    isDead = false;
    hasBlackJack = false;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
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
        hasBlackJack = true;
        player.coins += 10;
        playerEl.textContent = `Player: ${player.name} $${player.coins}`;
    }else{
        message = "Sorry, you're out of the game!"
        isDead = true
    }
    messageEl.textContent = message;

}

function randomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}

function newCard(){
    if(isDead || hasBlackJack){
        startGame()
    }else {
        let otherCard = randomCard();
        sum += otherCard;
        cards.push(otherCard);
        renderGame()
    }
}