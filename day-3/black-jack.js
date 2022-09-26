    let chips = 200

let compCards = []
let compSuit =[]
let compSum = 0
let playerCards = []
let playerSuit =[]
let playerSum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let compCardsEl = document.getElementById("computer-cards-el")
let compSumEl = document.getElementById("computer-sum-el")
let messageEl = document.getElementById("message-el")
let playerSumEl = document.getElementById("player-sum-el")
let playerCardsEl = document.getElementById("player-cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = "Chips: $" + chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function getRandomSuit() {
    let randomNumber = Math.floor( Math.random()*4 ) + 1
    if (randomNumber === 1) {
        return "h"
    } else if (randomNumber === 2) {
        return "s"
    } else if (randomNumber === 3) {
        return "c"
    } else if (randomNumber === 4) {
        return "d"
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    chips -= 10
    compSum = 0
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    playerCards = [firstCard, secondCard]
    playerSum = firstCard + secondCard
    let firstSuit = getRandomSuit()
    let secondSuit = getRandomSuit()
    playerSuit = [firstSuit, secondSuit]

    playerCardsEl.innerHTML = playerCardsEl.innerHTML = `<img class="card" src="./img/PNG-cards-1.3/${playerCards[0]}${playerSuit[0]}.png"/><img class="card" src="./img/PNG-cards-1.3/${playerCards[1]}${playerSuit[1]}.png"/>`
    compCardsEl.innerHTML = `<img class="card" src="./img/PNG-cards-1.3/NFTd.png"/><img class="card" src="./img/PNG-cards-1.3/NFTd.png"/>`
    renderGame()
}

function flipCards() {
    if (playerSum <= 21 && isAlive) {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    compCards = [firstCard, secondCard]
    compSum = firstCard + secondCard

    let firstSuit = getRandomSuit()
    let secondSuit = getRandomSuit()
    compSuit = [firstSuit, secondSuit]

    if (compSum <= 12) {
        let card = getRandomCard()
        let suit = getRandomSuit()
        compSum += card
        compCards.push(card)
        compSuit.push(suit)
    }
    
    compSumEl.innerHTML = `Computer total: ${compSum}`
    compCardsEl.innerHTML = ""
    for (let i = 0; i < compCards.length; i++) {
        compCardsEl.innerHTML += `<img class="card" src="./img/PNG-cards-1.3/${compCards[i]}${compSuit[i]}.png"/>`
        }
    isAlive = false
    renderGame()
}}

function renderGame() {
    playerSumEl.textContent = "Sum: " + playerSum
    if (isAlive) {
        if (playerSum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (playerSum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true
            chips += 20
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
    } else if (!hasBlackJack) {
        if (compSum > 21) {
            message = "Computer busts!"
        } else if (compSum > playerSum) {
            message = "Computer Wins!"
        } else if (compSum < playerSum) {
            message = "Winner!"
            chips += 20
        } else if (compSum = playerSum) {
            message = "Tie house wins"
        } else if (chips == 0) {
            message = "Pay up you need more chips!!"
        }}
    messageEl.textContent = message
    playerEl.textContent = "Chips: $" + chips
}


function newCard() {
    if (isAlive === true && hasBlackJack === false && compSum === 0) {
        let card = getRandomCard()
        let suit = getRandomSuit()
        playerSum += card
        playerCards.push(card)
        playerSuit.push(suit)
        console.log(playerCards[2] + playerSuit[2])
        for (let i = playerCards.length-1; i < playerCards.length; i++) {
            playerCardsEl.innerHTML += `<img class="card" src="./img/PNG-cards-1.3/${playerCards[i]}h.png"/>`
        }
        renderGame()
    } else if (compSum > 0) {
        messageEl.textContent = "Start a new game."
    }
}

function copy() {
    var copyText = document.getElementById("copy");
  
    navigator.clipboard.writeText("Blainthomas12@gmail.com");
  
    alert("Copied the email Blainthomas12@gmail.com");
  }
