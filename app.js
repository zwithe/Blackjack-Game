const cardNames = ['a', '2', '3', '4', '5', '6', '7', '8', '9','10', 'j', 'q', 'k'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
let ace = 11 //TODO; this variable needs to not be global
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
    const myCard1 = Math.round(Math.random() * deck.length)
    myHand.cards.push(deck[myCard1])
    deck.splice(myCard1, 1)
}
function dealerDraw(){
    const dealerCard1 = Math.round(Math.random() * deck.length)
    dealerHand.cards.push(deck[dealerCard1])
    deck.splice(dealerCard1, 1)
}
//Might need split draw
function deal(){
    myHand.cards = []
    dealerHand.cards = []
    splitHand.cards = []
    playerDraw()
    playerDraw()
    dealerDraw()
    dealerDraw()
    console.log(dealerHand)
    console.log(myHand)
    console.log(deck)
}
function displayHand(){
    console.log(myHand)
}
deal()
myHand.totalValue()
document.getElementById("hit").addEventListener("click", playerDraw)
document.getElementById("hit").addEventListener("click", myHand.totalValue)
document.getElementById("hit").addEventListener("click", displayHand)
