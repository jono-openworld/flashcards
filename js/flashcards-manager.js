class State {
    constructor(masterDeck, decks, decksIndex) {
        this.masterDeck;
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
// 2. Replace all double quotes with single quotes
// 3. Set width '60%'
// 4. Remove height attribute to set height to auto.


const allCards = JSON.parse(allCardsJsonString);
const masterDeck = new Deck( "All", allCards, 0);

allABCards = buildDeckFromSubject(masterDeck, "AP Calculus AB");

// Build decks for each AP Calculus AB unit
unit01Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "1");
unit02Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "2");
unit03Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "3");
unit04Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "4");
unit05Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "5");
unit06Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "6");
unit07Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "7");
unit08Deck = buildDeckFromSubjectAndUnit(masterDeck, "AP Calculus AB", "8");

radiansToCoordinatesDeck 
   = buildDeckFromSubjectUnitAndTopic(masterDeck, "Trigonometry", 
                                      "Unit Circle", "Sine, Cosine, Tangent");

logarithmPropertiesDeck = buildDeckFromSubjectAndTopic(masterDeck, "Logarithms", "Properties");

// Create the state from the decks
let state = new State(masterDeck, [allABCards, 
                                    unit01Deck, unit02Deck, unit03Deck, unit04Deck, 
                                    unit05Deck, unit06Deck, unit07Deck, unit08Deck, 
                                    radiansToCoordinatesDeck, logarithmPropertiesDeck], 0);



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

const learnedButton = document.querySelector('#learned-button');



//******************************************** */
// Initialize the webpage
init();


//******************************************** */
// Read the iteamName from local storage.
// The date is stored as a stringified JSON object.
function readFromLocalStorage(itemName) {
    let data;

    try {
        // Do not sync with session storage
        // b/c session storage is deleted
        // if the page is closed.
        // 
        // obj = JSON.parse(sessionStorage.state);

        data = JSON.parse(localStorage.getItem(itemName));

        console.log('readFromLocalStorage() successful.');

    } catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
        console.log('readFromLocalStorage() failed.');
    }

    return data;
}






//******************************************** */
// Write the item to storage.
// The data is stored as a stringified JSON object.
//
//
// Note: state should be written to storage
//       each time it is changed, b/c
//       there is no cross-browswer
//       event that reliably fires
//       on all OSs in all environments
//       when a page is closed
function writeToLocalStorage(itemName, data) {
    // 4/18/25 
    // state is now stored in localStorage
    // so that it persists after pages is closed
    // sessionStorage.setItem('state', JSON.stringify(obj));
    localStorage.setItem(itemName, JSON.stringify(data));

    console.log('writeToLocalStorage() complete');
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
    let storedState = readFromLocalStorage('state');

    // if there is state stored in localStorage
    // overwrite the current state with
    // the storedState
    if (storedState != null){
        state = storedState;
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

    // reset the deck
    resetDeck(currentDeck);
  
    // Default deck with be deck 0,
    // or deck stored in state.
    setDeck(currentDeck.name);

    
    // Default card in deck will be with be card 0
    // or the first active card
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

    if (currentDeck.numLearnedCards < currentDeck.numActiveCards){

        currentDeck.numLearnedCards++;

        currentDeck.cards[currentDeck.cardsIndex].learned = "true";

        // select a new card
        moveRightOne = (currentDeck.cardsIndex + 1) % currentDeck.cards.length;
        nextCardIndex = getNextCardIndex(currentDeck, moveRightOne);
        if (nextCardIndex >= 0) {
            setCard(currentDeck, nextCardIndex);
        }

        // update page
        updatePage();
            
    }

    console.log('learned() complete');
}






//******************************************** */
// Move forward one card in the current deck.
// 
//
function next() {

    const currentDeck = state.decks[state.decksIndex];
   
    // select a new card
    moveRightOne = (currentDeck.cardsIndex + 1) % currentDeck.cards.length;
    nextCardIndex 
        = getNextCardIndex(currentDeck, moveRightOne);
    if (nextCardIndex >= 0){
        setCard(currentDeck, nextCardIndex);
    }

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

    // update page
    updatePage();

    console.log('back() complete');
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

    // write state to localStorage
    writeToLocalStorage('state', state);       
   
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

    // sync state and webpage
    updatePage();

    // write state to localStorage
    writeToLocalStorage('state', state);       
 
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
                text += currentDeck.numLearnedCards + " / " + currentDeck.numActiveCards;
                progressBarLearned.innerHTML = "<p>" + text + "</p>";                  
            }
            else {
                progressBarLearned.innerHTML = "<p></p>";                  
            }
            
            // set width to percent of cards learned
            percent = (currentDeck.numLearnedCards*100 / currentDeck.numActiveCards);
            progressBarLearned.style.width = percent + "%";

        }
        else {
            progressBarLearned.textContent = "{No deck}";
        }
    }

    if(learnedButton != null){
        if (currentDeck.numLearnedCards >= currentDeck.numActiveCards) {
            learnedButton.disabled = true;
        }
        else {
            learnedButton.disabled = false;
        }
    }

    // Use MathJax to typeset any Latex math type.
    MathJax.typeset();


    console.log('updatePage() complete');
}


document.onvisibilitychange = () => {
    // if a user navigates to a new page, switches tabs, 
    // closes the tab, minimizes or closes the browser, 
    // or, on mobile, switches from the browser to a 
    // different app        
    if (document.visibilityState === "hidden") {
    
        // write state to localStorage (not to session storage
        // because session storage is deleted when a page 
        // is closed)
        writeToLocalStorage('state', state);       
      
    }
  };





function latexToJson(latexString)
{
    return latexString.replace('\\', '\\\\');

}

function jsonToLatex(jsonString)
{
    return jsonString.replace('\\\\', '\\');
}