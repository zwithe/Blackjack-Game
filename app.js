const cardNames = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
let deck = [];
let playerMoney = 2500
let currentBet = 50
let turnsPlayed = 0
const myHand  = {
    cards: [],
    bust: false,
    total: 0,
    countTotal: function(){
        let myTotal = 0
        for(let i = 0; i < myHand.cards.length; i++){
            myTotal = myTotal + myHand.cards[i].value 
        }
        console.log(myTotal)
        if(myTotal > 21){
            for(let i = 0; i < myHand.cards.length; i++){
                if(myHand.cards[i].value === 11){
                    myHand.cards[i].value = 1
                    myHand.countTotal()
                }
                else{
                    myHand.bust = true
                    myHand.total = myTotal
                } 
            }
        }
        else{
            myHand.bust = false;
            myHand.total = myTotal;
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
        const myCard1 = Math.round(Math.random() * (deck.length - 1))
        myHand.cards.push(deck[myCard1])
        deck.splice(myCard1, 1)
        myHand.countTotal()
    }
}
function dealerDraw(){
    if(deck[0] === undefined){
        buildDeck(6)
        dealerDraw()
    }
    else{
    const dealerCard1 = Math.round(Math.random() * (deck.length - 1))
    dealerHand.cards.push(deck[dealerCard1])
    deck.splice(dealerCard1, 1)
    dealerHand.countTotal()
    }
}
function splitDraw(){
    if(deck[0] === undefined){
        buildDeck(6)
        splitDraw()
    }
    else{
    const splitCard1 = Math.round(Math.random() * (deck.length - 1))
    splitHand.cards.push(deck[splitCard1])
    deck.splice(splitCard1, 1)
    splitHand.countTotal()
    }
}
function displayHand(){
    console.log(myHand)
    renderMyHand()
    renderDealerHand()
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
function renderMyHand(){
    clearHand()
    for(let i = 0; i < myHand.cards.length; i++){
        let card = document.createElement("div")
        card.innerHTML = myHand.cards[i].name
        card.setAttribute("class", "card")
        document.getElementById("myCards").append(card)
        if(myHand.cards[i].suit === 'clubs'){
            let clubs = document.createElement("img")
            clubs.setAttribute("src", "assets/clubs.png")
            card.append(clubs)
        }
        else if(myHand.cards[i].suit === 'spades'){
            let spades = document.createElement("img")
            spades.setAttribute("src", "assets/spades.png")
            card.append(spades)
        }
        else if(myHand.cards[i].suit === 'hearts'){
            card.style.color = "#eb3238"
            let hearts = document.createElement("img")
            hearts.setAttribute("src", "assets/hearts.png")
            card.append(hearts)
        }
        else if(myHand.cards[i].suit === 'diamonds'){
            card.style.color = "#eb3238"
            let diamonds = document.createElement("img")
            diamonds.setAttribute("src", "assets/diamonds.png")
            card.append(diamonds)
        }   
        
    }
}
function renderDealerHand(){
    let card = document.createElement("div")
    card.innerHTML = dealerHand.cards[0].name
    card.setAttribute("class", "card")
    document.getElementById("dealerCards").append(card)
    if(dealerHand.cards[0].suit === 'clubs'){
        let clubs = document.createElement("img")
        clubs.setAttribute("src", "assets/clubs.png")
        card.append(clubs)
    }
    else if(dealerHand.cards[0].suit === 'spades'){
        let spades = document.createElement("img")
        spades.setAttribute("src", "assets/spades.png")
        card.append(spades)
    }
    else if(dealerHand.cards[0].suit === 'hearts'){
        card.style.color = "#eb3238"
        let hearts = document.createElement("img")
        hearts.setAttribute("src", "assets/hearts.png")
        card.append(hearts)
    }
    else if(dealerHand.cards[0].suit === 'diamonds'){
        card.style.color = "#eb3238"
        let diamonds = document.createElement("img")
        diamonds.setAttribute("src", "assets/diamonds.png")
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
async function renderDealerTurn(){
    await sleep(400)
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
    for(let i = 0; i < myHand.cards.length; i++){
        let card = document.createElement("div")
        card.innerHTML = myHand.cards[i].name
        card.setAttribute("class", "card")
        document.getElementById("myCards").append(card)
        if(myHand.cards[i].suit === 'clubs'){
            let clubs = document.createElement("img")
            clubs.setAttribute("src", "assets/clubs.png")
            card.append(clubs)
        }
        else if(myHand.cards[i].suit === 'spades'){
            let spades = document.createElement("img")
            spades.setAttribute("src", "assets/spades.png")
            card.append(spades)
        }
        else if(myHand.cards[i].suit === 'hearts'){
            card.style.color = "#eb3238"
            let hearts = document.createElement("img")
            hearts.setAttribute("src", "assets/hearts.png")
            card.append(hearts)
        }
        else if(myHand.cards[i].suit === 'diamonds'){
            card.style.color = "#eb3238"
            let diamonds = document.createElement("img")
            diamonds.setAttribute("src", "assets/diamonds.png")
            card.append(diamonds)
        }   
        
    }
}
function playerWins(){
    console.log('player wins')
    playerMoney = playerMoney + (currentBet * 2)
    displayResults('You win!')
    turnsPlayed++
}
function dealerBust(){
    console.log('player wins')
    playerMoney = playerMoney + currentBet
    displayResults('The dealer busted! You win!')
    turnsPlayed++
}
function draw(){
    console.log('draw')
    displayResults('You tied the dealer. Your bet is returned')
    turnsPlayed++
}
function blackjack(){
    if(myHand.total === dealerHand.total){
        stand()
    }
    else{
        console.log('Blackjack')
        renderDealerTurn()
        playerMoney = playerMoney + (currentBet * 1.5)
        displayResults('You got Blackjack!')
        turnsPlayed++
    }
}
function dealerWins(){
    console.log('dealer wins')
    playerMoney = playerMoney - currentBet
    if(playerMoney <= 0){
        gameOver()
    }
    else{
        displayResults('The dealer wins!')
        turnsPlayed++
    }
}
function Surrender(){
    playerMoney = playerMoney - (currentBet / 2)
    if(playerMoney <= 0){
        gameOver()
    }
    else{
        displayResults('You surrendered! Half your bet is returned.')
        turnsPlayed++
    }
}
function doubleDown(){
    currentBet = currentBet * 2
    document.getElementById("double").remove()
}
function displayResults(Message){
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.innerHTML = `${Message}`
    let nextHand = document.createElement("button")
    nextHand.setAttribute("id", "nextHand")
    nextHand.innerHTML = "Next Hand"
    buttonBox.append(nextHand)
    document.getElementById("nextHand").addEventListener("click", playAgain)
}
function removeSurrender(){
    document.getElementById("surrender").remove()
}
function playAgain(){
    resetButtons()
    deal()
}
function resetGame(){
    playerMoney = 2500
    currentBet = 50
    turnsPlayed = 0
    deck = []
    buildDeck(6)
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.innerHTML = 'Welcome! This is my Blackjack game. The dealer stands on all totals 17 or higher. Face cards are worth 10 and aces are either 1 or 11. The goal is to get the highest number possible without going over 21!<button id="start">Click here to begin</button>'
    document.getElementById('start').addEventListener('click', playAgain)
}
function gameOver(){
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.innerHTML = `Game Over. You ran out of money! Your 2500$ lasted you ${turnsPlayed} Hands. Hit the button to play again!`
    let reset = document.createElement("button")
    reset.setAttribute("id", "resetGame")
    reset.innerHTML = "Try again"
    buttonBox.append(reset)
    document.getElementById("resetGame").addEventListener("click", resetGame)
}
async function stand(){
   await renderDealerTurn()
   dealerHand.countTotal()
    if(dealerHand.total <= 16){
        dealerDraw()
        await renderDealerTurn()
        stand()
    } 
    else{
        if(myHand.total > dealerHand.total){
            playerWins()
        } 
        else if(myHand.total === dealerHand.total){
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
function resetButtons(){
    let buttonBox = document.getElementById("buttonBox")
    buttonBox.innerHTML = '<button id="hit">Hit</button><button id="stand">Stand</button><button id="double">Double Down</button><button id="surrender">Surrender</button>'
    document.getElementById("hit").addEventListener("click", playerDraw)
    document.getElementById("hit").addEventListener("click", displayHand)
    document.getElementById("hit").addEventListener("click", removeSurrender)
    document.getElementById("stand").addEventListener("click", stand)
    document.getElementById("surrender").addEventListener("click", Surrender)
    document.getElementById("double").addEventListener("click", doubleDown)
}
function deal(){
    myHand.cards = []
    dealerHand.cards = []
    splitHand.cards = []
    playerDraw()
    playerDraw()
    dealerDraw()
    dealerDraw()
    /*if(myHand.cards[0].name === myHand.cards[1].name){
        let splitButton = document.createElement("button")
        splitButton.innerHTML = "Split"
        splitButton.setAttribute("id", "splitButton")
        document.getElementById("buttonBox").append(splitButton)
    }*/
    renderMyHand()
    renderDealerHand()
    console.log(dealerHand)
    console.log(myHand)
    console.log(deck)
    myHand.countTotal()
    dealerHand.countTotal()
    currentBet = 50
    if(myHand.total === 21){
        blackjack()
    }
}
document.getElementById('start').addEventListener('click', playAgain)

