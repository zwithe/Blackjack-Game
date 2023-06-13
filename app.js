const cardNames = ['a', '2', '3', '4', '5', '6', '7', '8', '9','10', 'j', 'q', 'k'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
let ace = 11 //TODO; this variable needs to not be global
const values = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const deck = [];
const myHand  = {
    cards: [],//TODO:function here that sums all values of cards and deals with ace
    aceValue: 11,
    totalValue: function(){
        for(let i = 0; i < myHand.cards.length; i++){
            if (myHand.cards[i].value = 11){
                myHand.cards[i].value = myHand.aceValue
            }
            else{

            }

        }
        
    }
}
const dealerHand  = {
    cards: [],
    aceValue: 11,
    //totalValue: //TODO:function here that sums all values of cards and deals with ace
}
const splitHand  = {
    cards: [],
    aceValue: 11,    
    //totalValue: //TODO:function here that sums all values of cards and deals with ace
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
console.log(deck);
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
deal()
