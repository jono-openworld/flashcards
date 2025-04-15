
//******************************************* */
// Class questions
class Card {
    constructor(unit, topic, category, 
                learned, active,
                questionFontSize, question,
                answerFontSize, answer) {
        this.unit = unit; // "1", "2", "3", ... "10"
        this.topic = topic; // "1.2", "1.4", EventCounts.
        this.category = category; // "Definitions", "Theorems", etc.
        this.learned = learned; // "true" or "false" 
        this.active = active; // card should be displayed to user if learned == false
        this.questionFontSize = questionFontSize; // "w3-large", "w3-xlarge", etc.
        this.question = question; // a 1D array of Strings (table rows)
        this.answerFontSize = answerFontSize; // "w3-large", "w3-xlarge", etc.
        this.answer = answer; // a 1D array of Strings (table rows)
    }
};

class Deck {

    numLearnedCards;
    numTotalActiveCards;

    constructor(name, cards, cardsIndex) {
        this.name = name;
        this.cards = cards;
        this.cardsIndex = cardsIndex;

        this.numLearnedCards = 0;
        this.numTotalActiveCards = 0;
    
        if (!(this.cards === null)){
            this.cards.forEach((element) => {
                if (element.active != null 
                 && element.active.toLowerCase() == "true") {
                    this.numTotalActiveCards++;
                };
            });
        }

    }
};

class State {
    constructor(decks, decksIndex) {
        this.decks = decks;
        this.decksIndex = decksIndex;
    }
};


//******************************************* */
// Create the state by loading decks from
// JSON strings stored in javascript files.
//
// The state will contain all the decks, 
// and index into the current deck,
// 

// When storing SVG data in JSON string 
// 1. Remove '\n' and
// 2. Rreplace all double quotes with single quotes
// 3. Set width '60%'
// 4. Remove height attribute to set height to auto.


// const formulasCards = JSON.parse(mathFormulasDeckJsonString);
// const formulasDeck = new Deck( "Formulas", formulasCards, 0);

// const anglesCards = JSON.parse(anglesDeckJsonString);
// const anglesDeck = new Deck( "Angles", anglesCards, 0);

const unit01Cards = JSON.parse(unit01DeckJsonString);
const unit01Deck = new Deck( "Unit 01", unit01Cards, 0);

const unit02Cards = JSON.parse(unit02DeckJsonString);
const unit02Deck = new Deck( "Unit 02", unit02Cards, 0);
 

const unit03Cards = JSON.parse(unit03DeckJsonString);
const unit03Deck = new Deck( "Unit 03", unit03Cards, 0);

const unit04Cards = JSON.parse(unit04DeckJsonString);
const unit04Deck = new Deck( "Unit 04", unit04Cards, 0);

const unit05Cards = JSON.parse(unit05DeckJsonString);
const unit05Deck = new Deck( "Unit 05", unit05Cards, 0);

const unit06Cards = JSON.parse(unit06DeckJsonString);
const unit06Deck = new Deck( "Unit 06", unit06Cards, 0);

const unit07Cards = JSON.parse(unit07DeckJsonString);
const unit07Deck = new Deck( "Unit 07", unit07Cards, 0);


const unit08Cards = JSON.parse(unit08DeckJsonString);
const unit08Deck = new Deck( "Unit 08", unit08Cards, 0);

//let state = new State([unit01Deck, unit02Deck, unit03Deck], 0);
 let state = new State([unit01Deck, unit02Deck, unit03Deck,
                         unit04Deck, unit05Deck, unit06Deck,
                         unit07Deck, unit08Deck], 0);



//******************************************** */
// Create variables to elements in the DOM
// that need to be updated from the state
const deckHeader = document.querySelector('#deck-header');

const questionContainer = document.querySelector('#question-container');
const question = document.querySelector('#question');

const answerContainer = document.querySelector('#answer-container');
const answer = document.querySelector('#answer');

const progressBar = document.querySelector('#progress-bar');
const progressBarLearned = document.querySelector('#progress-bar-learned');



//******************************************** */
// Initialize the webpage
init();



//******************************************** */
// Read the state from storage.
// The state is stored as a stringified JSON object.
function readState() {
    let obj;

    try {
        obj = JSON.parse(sessionStorage.state);

        console.log('readState() successful.');

    } catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
        console.log('readState() failed.');
    }

    return obj;
}






//******************************************** */
// Write the state to storage.
// The state is stored as a stringified JSON object.
function writeState(obj) {
    sessionStorage.setItem('state', JSON.stringify(obj));

    console.log('writeState() complete');
}





//******************************************** */
// Initialize the webpage from the stored state
// if it exists, otherwise initialize the webpage
// from the default state. 
//
// Set the initial deck and card to be those
// from the store state, or the default deck
// and card.
//
// Sync the state with webpage.
//
function init() {
    let newState = readState();
    if (newState != null){
        state = newState;
    }
    else {
        writeState(state);
    }

    const currentDeck = state.decks[state.decksIndex];

    // Default deck with be deck 0,
    // or deck stored in state.
    setDeck(currentDeck.name);
    
    // Set current card to the next active card
    // beginning with index currentDeck.cardsIndex.
    nextCardIndex = getNextCardIndex( currentDeck, currentDeck.cardsIndex);
    if (nextCardIndex >= 0){
        setCard(currentDeck, nextCardIndex);
    }

    // sync state and webpage
    updatePage();  

    console.log('init() complete');
}




//******************************************** */
// Reset the current deck.
// Set current index to 0.
// Sync the state with webpage.
//
function reset(){

    const currentDeck = state.decks[state.decksIndex];
  
    // Default deck with be deck 0,
    // or deck stored in state.
    setDeck(currentDeck.name);

    
    // set all active cards to unlearned
    currentDeck.cards.forEach((element) => {
        if (element.active != null 
         && element.active.toLowerCase() == "true") {
            element.learned = "false";
        };
    });

    // reset numLearnedCards
    currentDeck.numLearnedCards = 0;

    // Default card in deck will be with be card 0,
    // or card stored in state.
    nextCardIndex = getNextCardIndex(currentDeck, 0);
    if (nextCardIndex >= 0){
        setCard(currentDeck, nextCardIndex);
    }

    // sync state and webpage
    updatePage();  

    console.log('reset() complete');
}



//******************************************** */
// Shuffle the current deck.
// Set current index to 0.
//
// Write state to storage.
//
// Sync the state with webpage.
//
function shuffle() {
    const currentDeck = state.decks[state.decksIndex];

    // Randomly sort the current deck.
    currentDeck.cards.sort(() => Math.random() - 0.5);;

    // Set current card to the next active card
    // beginning with index 0.
    nextCardIndex = getNextCardIndex( currentDeck, 0);
    if (nextCardIndex >= 0){
        setCard(currentDeck, nextCardIndex);
    }

    // write State
    writeState(state);

    // update page
    updatePage();

    console.log('shuffle() complete');
}


//******************************************** */
// Remove card from deck
// 
//
function learned() {

    const currentDeck = state.decks[state.decksIndex];

    currentDeck.numLearnedCards++;

    currentDeck.cards[currentDeck.cardsIndex].learned = "true";

    // write State
    writeState(state);

    // select a new card
    moveRightOne = (currentDeck.cardsIndex + 1) % currentDeck.cards.length;
    nextCardIndex = getNextCardIndex(currentDeck, moveRightOne);
    if (nextCardIndex >= 0) {
        setCard(currentDeck, nextCardIndex);
    }

    // write State
    writeState(state);

    // update page
    updatePage();

    console.log('remove() complete');
}






//******************************************** */
// Move forward one card in the current deck.
// 
//
function next() {

    const currentDeck = state.decks[state.decksIndex];
   
    // write State
    writeState(state);

    // select a new card
    moveRightOne = (currentDeck.cardsIndex + 1) % currentDeck.cards.length;
    nextCardIndex 
        = getNextCardIndex(currentDeck, moveRightOne);
    if (nextCardIndex >= 0){
        setCard(currentDeck, nextCardIndex);
    }

    // write State
    writeState(state);

    // update page
    updatePage();

    console.log('next() complete');
}






//******************************************** */
// Move backward one card in the current deck.
// 
//
function back() {

    const currentDeck = state.decks[state.decksIndex];
   
    // write State
    writeState(state);

    // select a new card
    moveLeftOne = currentDeck.cardsIndex - 1;
    if (moveLeftOne < 0){
        moveLeftOne = currentDeck.cards.length - 1;
    }
    previousCardIndex 
        = getPreviousCardIndex(currentDeck, moveLeftOne);
    if (previousCardIndex >= 0){
        setCard(currentDeck, previousCardIndex);
    }

    // write State
    writeState(state);

    // update page
    updatePage();

    console.log('back() complete');
}





//******************************************** */
// Get the next active, unlearned card index
// start searching at index.
// Else return -1
// 
//
function getNextCardIndex(deck, index) {
    if ((deck != null) 
        && (deck.cards.length > 0) 
        && (index < deck.cards.length) 
        && (deck.numTotalActiveCards > 0) 
        && (deck.numLearnedCards != deck.numTotalActiveCards)) {

        // wrap to the left end if necessary
        tempIndex = index;

        while (deck.cards[tempIndex].active.toLowerCase() != "true"
            || deck.cards[tempIndex].learned.toLowerCase() == "true") {
            tempIndex++;

            // wrap to the left end
            tempIndex = (tempIndex % deck.cards.length);
        }
        return tempIndex;
    }

    return -1;
}

//******************************************** */
// Get the previous active, unlearned index
// start searching at index.
// Else return -1
// 
//
function getPreviousCardIndex(deck, index) {
    if ((deck != null) 
        && (deck.cards.length > 0) 
        && (deck.numTotalActiveCards > 0) 
        && (deck.numLearnedCards != deck.numTotalActiveCards)) {

        tempIndex = index;

        while (deck.cards[tempIndex].active.toLowerCase() != "true"
            || deck.cards[tempIndex].learned.toLowerCase() == "true") {
            tempIndex--;
            if (tempIndex < 0) {
                // wrap around to the right end
                tempIndex = deck.cards.length - 1;
            }
            }
        return tempIndex;
    }

    return -1;
}



//******************************************** */
// Set the current card index.
// 
//
function setCard(deck, index) {
    if ((deck != null) &&
        (deck.cards.length > 0)) {

        deck.cardsIndex = index;
        
        // show question
        // hide answer
        showCard("question-container");
    }

    console.log('setCard() complete');
}





//******************************************** */
// Set the current deck index to be the 
// deck with name, if it exists.
// Otherwise, set the current deck to 0.
//
function setDeck(name) {

    // Set the current deck index to 0.
    // In case, we do not find a deck that
    // matches name.
    state.decksIndex = 0;

    // Find the deck that matches name if it exists.
    for (i = 0; i < state.decks.length; i++) {
        if (state.decks[i].name.localeCompare(name) == 0 ){
            state.decksIndex = i;
        }
    }

    // Set the current card to whatever
    // this decks current card is.
    const currentDeck = state.decks[state.decksIndex];

    // Set current card to the next active card
    // beginning with currentDeck.cardsIndex.
    nextCardIndex = getNextCardIndex( currentDeck, currentDeck.cardsIndex);
    if (nextCardIndex >= 0){
        setCard(currentDeck, nextCardIndex);
    }

    // Write the state
    writeState(state);

    // sync state and webpage
    updatePage();

    console.log('setDeck() complete');
}


//******************************************** */
// Hide the element.
//
function hideElement(element){
    if(element != null){
        if (element.className != null){
            element.className 
                = element.className.replace(" w3-show", "");
            
                element.className.textContent = "+ Show";
        }
    }

    console.log('hideElement() complete');
}



//******************************************** */
// Either show the card's question and hide
// the card's answer, or show the card's answer
// and hide the card's question.
//
function showCard(idString){
    if(idString != null){
        if (idString.localeCompare("question-container") == 0){
            // Show the card's question and hide the card's answer
            questionContainer.className = questionContainer.className.replace("w3-hide", "w3-show");
            answerContainer.className = answerContainer.className.replace("w3-show", "w3-hide");
        }
        else if (idString.localeCompare("answer-container") == 0){
            // show the card's answer and hide the card's question.
            questionContainer.className = questionContainer.className.replace("w3-show", "w3-hide");
            answerContainer.className = answerContainer.className.replace("w3-hide", "w3-show");
        }
    }
    console.log('showCard() complete');
}


//******************************************** */
// Update the webpage by syncing it with the state.
//
function updatePage() {

    // make variables for current deck
    // and current card to add readability
    // to code
    const currentDeck = state.decks[state.decksIndex];
    const currentCard = currentDeck.cards[currentDeck.cardsIndex];

    // Deck Header
    if (deckHeader != null){
        if (currentDeck != null){
            deckHeader.innerHTML = currentDeck.name;
        }
        else {
            deckHeader.innerHTML = "{No deck}";
        }
    }

    // question
    if (question != null){
        if (currentCard != null 
        && currentCard.active.toLowerCase() == "true"
        && currentCard.learned.toLowerCase() == "false"){

            // build an HTML table of question rows
            
            // center the table
            string = "";
            string += '<table style=" margin-left: auto; margin-right: auto;"';
            string += ' class = "' + currentCard.questionFontSize + '"';
            string += '>';
            currentCard.question.forEach((element) => string += '<tr><td style = "text-align: left;">' + element + "</td></tr>");
            string += "</table>";

            question.innerHTML = string;
        }
        else {
            question.innerHTML = "Done!";
        }
    }
    
    // answer
    if (answer != null){
        if (currentCard != null 
            && currentCard.active.toLowerCase() == "true"
            && currentCard.learned.toLowerCase() == "false"){

            // build an HTML table of answer rows
            
            // center the table
            string = '<table style=" margin-left: auto; margin-right: auto;"';
            string += ' class = "' + currentCard.answerFontSize + '"';
            string += '>';
            currentCard.answer.forEach((element) => string += '<tr><td style=" text-align: left;">' + element + "</td></tr>");
            string += "</table>";

            answer.innerHTML = string;
        }
        else {
            answer.innerHTML = "Done!";
        }
    }

    // progress bar

    if (progressBar != null && progressBarLearned != null){
        if (currentDeck != null){
     
            if (currentDeck.numLearnedCards > 0){
                text = "";
                text += currentDeck.numLearnedCards + " / " + currentDeck.numTotalActiveCards;
                progressBarLearned.innerHTML = "<p>" + text + "</p>";                  
            }
            
            // set width to percent of cards learned
            percent = (currentDeck.numLearnedCards*100 / currentDeck.numTotalActiveCards);
            progressBarLearned.style.width = percent + "%";

        }
        else {
            progressBarLearned.textContent = "{No deck}";
        }
    }

    // Use MathJax to typeset any Latex math type.
    MathJax.typeset();


    console.log('updatePage() complete');
}

function latexToJson(latexString)
{
    return latexString.replace('\\', '\\\\');

}

function jsonToLatex(jsonString)
{
    return jsonString.replace('\\\\', '\\');
}