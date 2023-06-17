const cardNames = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
let ace = 11 
const values = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const deck = [];
const myHand  = {
    cards: [],
    bust: false,
    totalValue: function(){
        let myTotal = 0
        for(let i = 0; i < myHand.cards.length; i++){
            myTotal = myTotal + myHand.cards[i].value 
        }
        console.log(myTotal)
        if(myTotal > 21){
            for(let i = 0; i < myHand.cards.length; i++){
                if(myHand.cards[i].value === 11){
                    myHand.cards[i].value = 1
                    myHand.totalValue()
                }
                else{
                    myHand.bust = true
                } 
            }
        }
        else{
            myHand.bust = false
        }
    },
    
}
const dealerHand  = {
    cards: [],
    bust: false,
    totalValue: function(){
        let dealerTotal = 0
        for(let i = 0; i < dealerHand.cards.length; i++){
            dealerTotal = dealerTotal + dealerHand.cards[i].value
        } 
        if(dealerTotal > 21){
            for(let i = 0; i < dealerHand.cards.length; i++){
                if(dealerHand.cards[i].value === 11){
                    dealerHand.cards[i].value = 1
                    dealerHand.totalValue()
                }
                else{
                    dealerHand.bust = true
                } 
            }
        }
        else{
            dealerHand.bust = false
        }
    },
    
}
const splitHand  = {
    cards: [],
    bust: false,    
    totalValue: function(){
        let splitTotal = 0
        for(let i = 0; i < splitHand.cards.length; i++){
            splitTotal = splitTotal + splitHand.cards[i].value
        }
        if(splitTotal > 21){
            for(let i = 0; i < splitHand.cards.length; i++){
                if(splitHand.cards[i].value === 11){
                    splitHand.cards[i].value = 1
                    splitHand.totalValue()
                }
                else{
                    splitHand.bust = true
                } 
            }
        }
        else{
            splitHand.bust = false
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
buildDeck(1);
console.log(deck)
function playerDraw(){
    if(deck[0] === undefined){
        buildDeck(6)
        playerDraw()
    }
    else{
        const myCard1 = Math.round(Math.random() * (deck.length - 1))
        myHand.cards.push(deck[myCard1])
        deck.splice(myCard1, 1)
        myHand.totalValue()
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
    dealerHand.totalValue()
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
    splitHand.totalValue()
    }
}
function deal(){
    myHand.cards = []
    dealerHand.cards = []
    splitHand.cards = []
    playerDraw()
    playerDraw()
    dealerDraw()
    dealerDraw()
    if(myHand.cards[0].name === myHand.cards[1].name){
        let splitButton = document.createElement("button")
        splitButton.innerHTML = "Split"
        splitButton.setAttribute("id", "splitButton")
        document.getElementById("buttonBox").append(splitButton)
    }
    console.log(dealerHand)
    console.log(myHand)
    console.log(deck)
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
function deal(){
    myHand.cards = []
    dealerHand.cards = []
    splitHand.cards = []
    playerDraw()
    playerDraw()
    dealerDraw()
    dealerDraw()
    if(myHand.cards[0].name === myHand.cards[1].name){
        let splitButton = document.createElement("button")
        splitButton.innerHTML = "Split"
        splitButton.setAttribute("id", "splitButton")
        document.getElementById("buttonBox").append(splitButton)
    }
    renderMyHand()
    renderDealerHand()
    console.log(dealerHand)
    console.log(myHand)
    console.log(deck)
    myHand.totalValue()
}
deal()


document.getElementById("hit").addEventListener("click", playerDraw)
document.getElementById("hit").addEventListener("click", displayHand)
