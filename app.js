const cardNames = ['a', '2', '3', '4', '5', '6', '7', '8', '9','10', 'j', 'q', 'k'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
const deck = [];

function buildDeck(numberOfDecks){
    for(let suit of suits){
        for(let cardName of cardNames){
            deck.push({
                name: cardName,
                suit: suit,
                value: cardName, //replace with function later
            })
            
        }
    }
}
buildDeck();
console.log(deck);

/*let aceOfHearts = {
    name: 'ace',
    suit: 'hearts',
    value: '1 or 11', //placeholder probably need an if else here
    quantity: 6
}
let aceOfSpades = {
    name: 'ace',
    suit: 'spades',
    value: '1 or 11', //placeholder probably need an if else here
    quantity: 6
}
let aceOfClubs = {
    name: 'ace',
    suit: 'clubs',
    value: '1 or 11', //placeholder probably need an if else here
    quantity: 6
}
let aceOfDiamonds = {
    name: 'ace',
    suit: 'diamonds',
    value: '1 or 11', //placeholder probably need an if else here
    quantity: 6
}
let twoOfHearts = {
    name: 'two',
    suit: 'hearts',
    value: 2,
    quantity: 6
}
let twoOfSpades = {
    name: 'two',
    suit: 'spades',
    value: 2,
    quantity: 6
}
let twoOfClubs = {
    name: 'two',
    suit: 'clubs',
    value: 2,
    quantity: 6
}
let twoOfDiamonds = {
    name: 'two',
    suit: 'diamonds',
    value: 2,
    quantity: 6
}
let threeOfHearts = {
    name: 'three',
    suit: 'hearts',
    value: 3,
    quantity: 6
}
let threeOfSpades = {
    name: 'three',
    suit: 'spades',
    value: 3,
    quantity: 6
}
let threeOfClubs = {
    name: 'three',
    suit: 'clubs',
    value: 3,
    quantity: 6
}
let threeOfDiamonds = {
    name: 'three',
    suit: 'diamonds',
    value: 3,
    quantity: 6
}
let fourOfHearts = {
    name: 'four',
    suit: 'hearts',
    value: 4,
    quantity: 6
}
let fourOfSpades = {
    name: 'four',
    suit: 'spades',
    value: 4,
    quantity: 6
}
let fourOfClubs = {
    name: 'four',
    suit: 'clubs',
    value: 4,
    quantity: 6
}
let fourOfDiamonds = {
    name: 'four',
    suit: 'diamonds',
    value: 4,
    quantity: 6
}
let fiveOfHearts = {
    name: 'five',
    suit: 'hearts',
    value: 5,
    quantity: 6
}
let fiveOfSpades = {
    name: 'five',
    suit: 'spades',
    value: 5,
    quantity: 6
}
let fiveOfClubs = {
    name: 'five',
    suit: 'clubs',
    value: 5,
    quantity: 6
}
let fiveOfDiamonds = {
    name: 'five',
    suit: 'diamonds',
    value: 5,
    quantity: 6
}
let sixOfHearts = {
    name: 'six',
    suit: 'hearts',
    value: 6,
    quantity: 6
}
let sixOfSpades = {
    name: 'six',
    suit: 'spades',
    value: 6,
    quantity: 6
}
let sixOfClubs = {
    name: 'six',
    suit: 'clubs',
    value: 6,
    quantity: 6
}
let sixOfDiamonds = {
    name: 'six',
    suit: 'diamonds',
    value: 6,
    quantity: 6
}
let sevenOfHearts = {
    name: 'seven',
    suit: 'hearts',
    value: 7,
    quantity: 6
}
let sevenOfSpades = {
    name: 'seven',
    suit: 'spades',
    value: 7,
    quantity: 6
}
let sevenOfClubs = {
    name: 'seven',
    suit: 'clubs',
    value: 7,
    quantity: 6
}
let sevenOfDiamonds = {
    name: 'seven',
    suit: 'diamonds',
    value: 7,
    quantity: 6
}
let eightOfHearts = {
    name: 'eight',
    suit: 'hearts',
    value: 8,
    quantity: 6
}
let eightOfSpades = {
    name: 'eight',
    suit: 'spades',
    value: 8,
    quantity: 6
}
let eightOfClubs = {
    name: 'eight',
    suit: 'clubs',
    value: 8,
    quantity: 6
}
let eightOfDiamonds = {
    name: 'eight',
    suit: 'diamonds',
    value: 8,
    quantity: 6
}
let nineOfHearts = {
    name: 'nine',
    suit: 'hearts',
    value: 9,
    quantity: 6
}
let nineOfSpades = {
    name: 'nine',
    suit: 'spades',
    value: 9,
    quantity: 6
}
let nineOfClubs = {
    name: 'nine',
    suit: 'clubs',
    value: 9,
    quantity: 6
}
let nineOfDiamonds = {
    name: 'nine',
    suit: 'diamonds',
    value: 9,
    quantity: 6
}
let tenOfHearts = {
    name: 'ten',
    suit: 'hearts',
    value: 10,
    quantity: 6
}
let tenOfSpades = {
    name: 'ten',
    suit: 'spades',
    value: 10,
    quantity: 6
}
let tenOfClubs = {
    name: 'ten',
    suit: 'clubs',
    value: 10,
    quantity: 6
}
let tenOfDiamonds = {
    name: 'ten',
    suit: 'diamonds',
    value: 10,
    quantity: 6
}
let jackOfHearts = {
    name: 'jack',
    suit: 'hearts',
    value: 10,
    quantity: 6
}
let jackOfSpades = {
    name: 'jack',
    suit: 'spades',
    value: 10,
    quantity: 6
}
let jackOfClubs = {
    name: 'jack',
    suit: 'clubs',
    value: 10,
    quantity: 6
}
let jackOfDiamonds = {
    name: 'jack',
    suit: 'diamonds',
    value: 10,
    quantity: 6
}
let queenOfHearts = {
    name: 'queen',
    suit: 'hearts',
    value: 10,
    quantity: 6
}
let queenOfSpades = {
    name: 'queen',
    suit: 'spades',
    value: 10,
    quantity: 6
}
let queenOfClubs = {
    name: 'queen',
    suit: 'clubs',
    value: 10,
    quantity: 6
}
let queenOfDiamonds = {
    name: 'queen',
    suit: 'diamonds',
    value: 10,
    quantity: 6
}
let kingOfHearts = {
    name: 'king',
    suit: 'hearts',
    value: 10,
    quantity: 6
}
let kingOfSpades = {
    name: 'king',
    suit: 'spades',
    value: 10,
    quantity: 6
}
let kingOfClubs = {
    name: 'king',
    suit: 'clubs',
    value: 10,
    quantity: 6
}
let kingOfDiamonds = {
    name: 'king',
    suit: 'diamonds',
    value: 10,
    quantity: 6
}*/
//ORDER: HEARTS SPADES CLUB DIAMONDS
/*let deck = [aceOfHearts, aceOfSpades, aceOfClubs, aceOfDiamonds, twoOfHearts, twoOfSpades, twoOfClubs, twoOfDiamonds, threeOfHearts, threeOfSpades, threeOfClubs, threeOfDiamonds, fourOfHearts, fourOfSpades, fourOfClubs, fourOfDiamonds, fiveOfHearts, fiveOfSpades, fiveOfClubs, fiveOfDiamonds, sixOfHearts, sixOfSpades, sixOfClubs, sixOfDiamonds, sevenOfHearts, sevenOfSpades, sevenOfClubs, sevenOfDiamonds, eightOfHearts, eightOfSpades, eightOfClubs, eightOfDiamonds, nineOfHearts, nineOfSpades, nineOfClubs, nineOfDiamonds, tenOfHearts, tenOfSpades, tenOfClubs, tenOfDiamonds, jackOfHearts, jackOfSpades, jackOfClubs, jackOfDiamonds, queenOfHearts, queenOfSpades, queenOfClubs, queenOfDiamonds, kingOfHearts, kingOfSpades, kingOfClubs, kingOfDiamonds]*/
function shuffle(){
    aceOfHearts.quantity = 6;
    aceOfSpades.quantity = 6;
    aceOfClubs.quantity = 6;
    aceOfDiamonds.quantity = 6;
    twoOfHearts.quantity = 6;
    twoOfSpades.quantity = 6;
    twoOfClubs.quantity = 6;
    twoOfDiamonds.quantity = 6;
    threeOfHearts.quantity = 6;
    threeOfSpades.quantity = 6;
    threeOfClubs.quantity = 6;
    threeOfDiamonds.quantity = 6;
    fourOfHearts.quantity = 6;
    fourOfSpades.quantity = 6;
    fourOfClubs.quantity = 6;
    fourOfDiamonds.quantity = 6;
    fiveOfHearts.quantity = 6;
    fiveOfSpades.quantity = 6;
    fiveOfClubs.quantity = 6;
    fiveOfDiamonds.quantity = 6;
    sixOfHearts.quantity = 6;
    sixOfSpades.quantity = 6;
    sixOfClubs.quantity = 6;
    sixOfDiamonds.quantity = 6;
    sevenOfHearts.quantity = 6;
    sevenOfSpades.quantity = 6;
    sevenOfClubs.quantity = 6;
    sevenOfDiamonds.quantity = 6;
    eightOfHearts.quantity = 6;
    eightOfSpades.quantity = 6;
    eightOfClubs.quantity = 6;
    eightOfDiamonds.quantity = 6;
    nineOfHearts.quantity = 6;
    nineOfSpades.quantity = 6;
    nineOfClubs.quantity = 6;
    nineOfDiamonds.quantity = 6;
    tenOfHearts.quantity = 6;
    tenOfSpades.quantity = 6;
    tenOfClubs.quantity = 6;
    tenOfDiamonds.quantity = 6;
    jackOfHearts.quantity = 6;
    jackOfSpades.quantity = 6;
    jackOfClubs.quantity = 6;
    jackOfDiamonds.quantity = 6;
    queenOfHearts.quantity = 6;
    queenOfSpades.quantity = 6;
    queenOfClubs.quantity = 6;
    queenOfDiamonds.quantity = 6;
    kingOfHearts.quantity = 6;
    kingOfSpades.quantity = 6;
    kingOfClubs.quantity = 6;
    kingOfDiamonds.quantity = 6;
    deck = [aceOfHearts, aceOfSpades, aceOfClubs, aceOfDiamonds, twoOfHearts, twoOfSpades, twoOfClubs, twoOfDiamonds, threeOfHearts, threeOfSpades, threeOfClubs, threeOfDiamonds, fourOfHearts, fourOfSpades, fourOfClubs, fourOfDiamonds, fiveOfHearts, fiveOfSpades, fiveOfClubs, fiveOfDiamonds, sixOfHearts, sixOfSpades, sixOfClubs, sixOfDiamonds, sevenOfHearts, sevenOfSpades, sevenOfClubs, sevenOfDiamonds, eightOfHearts, eightOfSpades, eightOfClubs, eightOfDiamonds, nineOfHearts, nineOfSpades, nineOfClubs, nineOfDiamonds, tenOfHearts, tenOfSpades, tenOfClubs, tenOfDiamonds, jackOfHearts, jackOfSpades, jackOfClubs, jackOfDiamonds, queenOfHearts, queenOfSpades, queenOfClubs, queenOfDiamonds, kingOfHearts, kingOfSpades, kingOfClubs, kingOfDiamonds]
}