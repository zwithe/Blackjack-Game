const cardNames = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let deck = [];
const gameStats = {
    playerMoney:  2500,
    currentBet:  50,
    turnsPlayed:  0,
    wins: 0,
    losses: 0,
    winPercentage: 0,
    lossPercentage: 0,
    renderMoney: function(){
        if(this.currentBet > this.playerMoney){
            this.currentBet = this.playerMoney
            this.renderMoney()
            removeSurrender()
        }
        else{
            document.getElementById("bet").innerHTML = `$${this.currentBet}`
            let totalCash = (gameStats.playerMoney - gameStats.currentBet)
            document.getElementById("totalCash").innerHTML = `$${totalCash}`
        }
    },
    calcWinLoss: function(){
        if(this.wins === 0){
            this.winPercentage = 0
            this.lossPercentage = 100
        }
        else{
            this.winPercentage = (this.wins / (this.losses + this.wins)) * 100
            this.lossPercentage = (this.losses / (this.losses + this.wins)) * 100
        }
    }
}
gameStats.renderMoney()
const playerHand  = {
    cards: [],
    bust: false,
    total: 0,
    countTotal: function(){
        let playerTotal = 0
        for(let i = 0; i < playerHand.cards.length; i++){
            playerTotal = playerTotal + playerHand.cards[i].value 
        }
        console.log(playerTotal)
        if(playerTotal > 21){
            for(let i = 0; i < playerHand.cards.length; i++){
                if(playerHand.cards[i].value === 11){
                    playerHand.cards[i].value = 1
                    playerHand.countTotal()
                }
                else{
                    playerHand.bust = true
                    playerHand.total = playerTotal
                } 
            }
        }
        else{
            playerHand.bust = false;
            playerHand.total = playerTotal;
        }
    },
    
}
const dealerHand  = {
    cards: [],
    bust: false,
    total: 0,
    countTotal: function(){
        let dealerTotal = 0
        for(let i = 0; i < dealerHand.cards.length; i++){
            dealerTotal = dealerTotal + dealerHand.cards[i].value
        } 
        if(dealerTotal > 21){
            for(let i = 0; i < dealerHand.cards.length; i++){
                if(dealerHand.cards[i].value === 11){
                    dealerHand.cards[i].value = 1
                    dealerHand.countTotal()
                }
                else{
                    dealerHand.bust = true
                    dealerHand.total = dealerTotal
                } 
            }
        }
        else{
            dealerHand.bust = false;
            dealerHand.total = dealerTotal;
        }
    }, 
}
const splitHand  = {
    cards: [],
    bust: false,    
    countTotal: function(){
        let splitTotal = 0
        for(let i = 0; i < splitHand.cards.length; i++){
            splitTotal = splitTotal + splitHand.cards[i].value
        }
        if(splitTotal > 21){
            for(let i = 0; i < splitHand.cards.length; i++){
                if(splitHand.cards[i].value === 11){
                    splitHand.cards[i].value = 1
                    splitHand.countTotal()
                }
                else{
                    splitHand.bust = true
                } 
            }
        }
        else{
            splitHand.bust = false
            return splitTotal
        } 
    },
    
}
function buildDeck(numberOfDecks){
    for(let i = 0; i < numberOfDecks; i++ ){
        for(let suit of suits){
            for(let i = 0; i < cardNames.length; i++){
                deck.push({
                    name: cardNames[i],
                    suit: suit,
                    value: values[i], //TODO: this is very much not optimal only works because the arrays are the same length may be able to do this with map()
                })
            }
    }}
}
buildDeck(6);
function playerDraw(){
    if(deck[0] === undefined){
        buildDeck(6)
        playerDraw()
    }
    else{
        const playerCard = Math.round(Math.random() * (deck.length - 1))
        playerHand.cards.push(deck[playerCard])
        deck.splice(playerCard, 1)
        playerHand.countTotal()
        if(playerHand.total > 21){
            playerBust() 
        }
    }
}
function dealerDraw(){
    if(deck[0] === undefined){
        buildDeck(6)
        dealerDraw()
    }
    else{
    const dealerCard = Math.round(Math.random() * (deck.length - 1))
    dealerHand.cards.push(deck[dealerCard])
    deck.splice(dealerCard, 1)
    dealerHand.countTotal()
    }
}
// TODO: currently unused
function splitDraw(){
    if(deck[0] === undefined){
        buildDeck(6)
        splitDraw()
    }
    else{
    const splitCard = Math.round(Math.random() * (deck.length - 1))
    splitHand.cards.push(deck[splitCard])
    deck.splice(splitCard, 1)
    splitHand.countTotal()
    }
}
function displayHand(){
    console.log(playerHand)
    clearHand()
    renderPlayerHand()
    renderDealerHand()
}
function playerHit(){
    playerDraw()
    displayHand()
    removeSurrender()
}
function clearHand(){
    let currentHand = document.querySelectorAll('.card')
    for(let i = 0; i < currentHand.length; i++){
        currentHand[i].remove()
    }
    let cardBack = document.querySelectorAll('.cardBack')
    for(let i = 0; i < cardBack.length; i++){
    cardBack[i].remove()
    }
}
function renderPlayerHand(){
    for(let i = 0; i < playerHand.cards.length; i++){
        let card = document.createElement("div")
        card.innerHTML = playerHand.cards[i].name
        card.setAttribute("class", "card")
        document.getElementById("playerCards").append(card)
        if(playerHand.cards[i].suit === 'clubs'){
            let clubs = document.createElement("img")
            clubs.setAttribute("src", "assets/clubs.png")
            clubs.setAttribute("alt", "The Clubs symbol")
            card.append(clubs)
        }
        else if(playerHand.cards[i].suit === 'spades'){
            let spades = document.createElement("img")
            spades.setAttribute("src", "assets/spades.png")
            spades.setAttribute("alt", "The Spades symbol")
            card.append(spades)
        }
        else if(playerHand.cards[i].suit === 'hearts'){
            card.style.color = "#eb3238"
            let hearts = document.createElement("img")
            hearts.setAttribute("src", "assets/hearts.png")
            hearts.setAttribute("alt", "The Hearts symbol")
            card.append(hearts)
        }
        else if(playerHand.cards[i].suit === 'diamonds'){
            card.style.color = "#eb3238"
            let diamonds = document.createElement("img")
            diamonds.setAttribute("src", "assets/diamonds.png")
            diamonds.setAttribute("alt", "The Diamonds symbol")
            card.append(diamonds)
        }   
        
    }
}
//this renders the dealer's hand BEFORE the card is flipped
function renderDealerHand(){
    let card = document.createElement("div")
    card.innerHTML = dealerHand.cards[0].name
    card.setAttribute("class", "card")
    document.getElementById("dealerCards").append(card)
    if(dealerHand.cards[0].suit === 'clubs'){
        let clubs = document.createElement("img")
        clubs.setAttribute("src", "assets/clubs.png")
        clubs.setAttribute("alt", "The Clubs symbol")
        card.append(clubs)
    }
    else if(dealerHand.cards[0].suit === 'spades'){
        let spades = document.createElement("img")
        spades.setAttribute("src", "assets/spades.png")
        spades.setAttribute("alt", "The Spades symbol")
        card.append(spades)
    }
    else if(dealerHand.cards[0].suit === 'hearts'){
        card.style.color = "#eb3238"
        let hearts = document.createElement("img")
        hearts.setAttribute("src", "assets/hearts.png")
        hearts.setAttribute("alt", "The Hearts symbol")
        card.append(hearts)
    }
    else if(dealerHand.cards[0].suit === 'diamonds'){
        card.style.color = "#eb3238"
        let diamonds = document.createElement("img")
        diamonds.setAttribute("src", "assets/diamonds.png")
        diamonds.setAttribute("alt", "The Diamonds symbol")
        card.append(diamonds)
    }
    let cardBack = document.createElement("div")
    cardBack.setAttribute("class", "cardBack")
    document.getElementById("dealerCards").append(cardBack)
}
function sleep(time){
    return new Promise( resolve => {
        setTimeout(resolve, time)
    })
}
//this renders the dealer's hand AFTER card is flipped and during their turn
async function renderDealerTurn(){
    await sleep(500)
    clearHand()
    for(let i = 0; i < dealerHand.cards.length; i++){
        let card = document.createElement("div")
        card.innerHTML = dealerHand.cards[i].name
        card.setAttribute("class", "card")
        document.getElementById("dealerCards").append(card)
        if(dealerHand.cards[i].suit === 'clubs'){
            let clubs = document.createElement("img")
            clubs.setAttribute("src", "assets/clubs.png")
            card.append(clubs)
        }
        else if(dealerHand.cards[i].suit === 'spades'){
            let spades = document.createElement("img")
            spades.setAttribute("src", "assets/spades.png")
            card.append(spades)
        }
        else if(dealerHand.cards[i].suit === 'hearts'){
            card.style.color = "#eb3238"
            let hearts = document.createElement("img")
            hearts.setAttribute("src", "assets/hearts.png")
            card.append(hearts)
        }
        else if(dealerHand.cards[i].suit === 'diamonds'){
            card.style.color = "#eb3238"
            let diamonds = document.createElement("img")
            diamonds.setAttribute("src", "assets/diamonds.png")
            card.append(diamonds)
        }   
        
    }
    renderPlayerHand()
}
//Result handling functions start
function playerWins(){
    console.log('player wins')
    gameStats.playerMoney = gameStats.playerMoney + (gameStats.currentBet * 2)
    displayResults('You win!')
    gameStats.turnsPlayed++
    gameStats.wins++
}
function dealerBust(){
    console.log('player wins')
    gameStats.playerMoney = gameStats.playerMoney + gameStats.currentBet
    displayResults('The dealer busted! You win!')
    gameStats.turnsPlayed++
    gameStats.wins++
}
function draw(){
    console.log('draw')
    displayResults('You tied the dealer. Your bet is returned')
    gameStats.turnsPlayed++
}
function blackjack(){
    if(playerHand.total === dealerHand.total){
        stand()
    }
    else{
        console.log('Blackjack')
        renderDealerTurn()
        gameStats.playerMoney = gameStats.playerMoney + (gameStats.currentBet * 1.5)
        displayResults('You got Blackjack!')
        gameStats.turnsPlayed++
        gameStats.wins++
    }
}
function dealerWins(){
    console.log('dealer wins')
    gameStats.playerMoney = gameStats.playerMoney - gameStats.currentBet
    if(gameStats.playerMoney <= 0){
        gameOver()
    }
    else{
        displayResults('The dealer wins!')
        gameStats.turnsPlayed++
        gameStats.losses++
    }
}
function playerBust(){
    console.log('dealer wins')
    gameStats.playerMoney = gameStats.playerMoney - gameStats.currentBet
    if(gameStats.playerMoney <= 0){
        gameOver()
    }
    else{
        displayResults('You busted. The dealer wins!')
        gameStats.turnsPlayed++
        gameStats.losses++
    }
}
function Surrender(){
    gameStats.playerMoney = gameStats.playerMoney - (gameStats.currentBet / 2)
    if(gameStats.playerMoney <= 0){
        gameOver()
    }
    else{
        displayResults('You surrendered! Half your bet is returned.')
        gameStats.turnsPlayed++
        gameStats.losses++
    }
}
function doubleDown(){
    gameStats.currentBet = gameStats.currentBet * 2
    document.getElementById("double").remove()
    gameStats.renderMoney()
}
function displayResults(Message){
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.innerHTML = `${Message}`
    let nextHand = document.createElement("button")
    nextHand.setAttribute("id", "nextHand")
    nextHand.innerHTML = "Next Hand"
    buttonBox.append(nextHand)
    document.getElementById("nextHand").addEventListener("click", playAgain)
    gameStats.renderMoney()
}
//Result handling functions end
function removeSurrender(){
    if(document.getElementById("surrender") === null){

    }
    else{
        document.getElementById("surrender").remove()
    }
}
//playAgain resets buttons and deals
function playAgain(){
    resetButtons()
    deal()
}
// resetGame resets money and starting text
function resetGame(){
    gameStats.playerMoney = 2500
    gameStats.currentBet = 50
    gameStats.turnsPlayed = 0
    gameStats.renderMoney()
    deck = []
    buildDeck(6)
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.innerHTML = 'Welcome! This is my Blackjack game. The dealer stands on all totals 17 or higher. Face cards are worth 10 and aces are either 1 or 11. The goal is to get the highest number possible without going over 21! The bet is always $50 see how long before you go broke!<button id="start">Click here to begin</button>'
    document.getElementById('start').addEventListener('click', playAgain)
}
function gameOver(){
    let buttonBox = document.getElementById("buttonBox")
    gameStats.calcWinLoss()
    buttonBox.innerHTML = `Game Over. You ran out of money! Your 2500$ lasted you ${gameStats.turnsPlayed} Hands. Of which you lost ${gameStats.lossPercentage}% and won ${gameStats.winPercentage}%. Hit the button to play again!`
    let reset = document.createElement("button")
    reset.setAttribute("id", "resetGame")
    reset.innerHTML = "Try again"
    buttonBox.append(reset)
    document.getElementById("resetGame").addEventListener("click", resetGame)
}
// Dealer logic is here as well as the link to the result functions
async function stand(){
   await renderDealerTurn()
   dealerHand.countTotal()
    if(dealerHand.total <= 16){
        dealerDraw()
        await renderDealerTurn()
        stand()
    } 
    else{
        if(playerHand.total > dealerHand.total){
            playerWins()
        } 
        else if(playerHand.total === dealerHand.total){
            draw()
        }
        else if(dealerHand.bust === true){
            dealerBust()
        }
        else{
            dealerWins()
        }
    }

}
// buttons for default play state are found here   
function resetButtons(){
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.innerHTML = '<button id="hit">Hit</button><button id="stand">Stand</button><button id="double">Double Down</button><button id="surrender">Surrender</button>'
    document.getElementById("hit").addEventListener("click", playerHit)
    document.getElementById("stand").addEventListener("click", stand)
    document.getElementById("surrender").addEventListener("click", Surrender)
    document.getElementById("double").addEventListener("click", doubleDown)
}
function deal(){
    playerHand.cards = []
    dealerHand.cards = []
    splitHand.cards = []
    clearHand()
    playerDraw()
    playerDraw()
    dealerDraw()
    dealerDraw()
    /*if(playerHand.cards[0].name === playerHand.cards[1].name){
        let splitButton = document.createElement("button")
        splitButton.innerHTML = "Split"
        splitButton.setAttribute("id", "splitButton")
        document.getElementById("buttonBox").append(splitButton)
    }*/
    renderPlayerHand()
    renderDealerHand()
    console.log(dealerHand)
    console.log(playerHand)
    console.log(deck)
    playerHand.countTotal()
    dealerHand.countTotal()
    gameStats.currentBet = 50
    gameStats.renderMoney()
    if(gameStats.playerMoney <= 25){
        removeSurrender()
    }
    if(playerHand.total === 21){
        blackjack()
    }
}
resetGame()

