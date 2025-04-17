//******************************************* */
// Class questions
class Card {
    constructor(subject, unit, topic, category, 
                learned, active,
                questionFontSize, question,
                answerFontSize, answer) {
        this.subject = subject; // "AP Calculus AB", "AP Calculus BC", "Trigonometry"
        this.unit = unit; // "1", "2", "3", ... "10"
        this.topic = topic; // "1.2", "1.4", etc.
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

    // the number of learned cards
    numLearnedCards;
    // the number of active cards
    numActiveCards;

    // a master copy of the cards for reset
    masterCards;

    constructor(name, cards, cardsIndex) {
        this.name = name;
        this.cards = cards;
        this.cardsIndex = cardsIndex;

        this.numLearnedCards = 0;
        this.numActiveCards = 0;
    
        // count number of active cards
        if (!(this.cards === null)){
            this.cards.forEach((element) => {
                if (element.active != null 
                 && element.active.toLowerCase() == "true") {
                    this.numActiveCards++;
                };
            });
        }

        
        // make a master copy of the cards
        if (this.cards != null) {
            this.masterCards = [];
    
            // make a copy of each card
            // and add it to the master deck
            this.cards.forEach(element => {
                this.masterCards.push(duplicateCard(element));
            });
        }
    }
};


//******************************************** */
// Create and return a duplicate of inCard
///
function duplicateCard(inCard){
    return new Card(
        inCard.subject, 
        inCard.unit, 
        inCard.topic, 
        inCard.category, 
        inCard.learned, 
        inCard.active,
        inCard.questionFontSize, 
        inCard.question,
        inCard.answerFontSize, 
        inCard.answer);
}

//******************************************** */
// Create and return a duplicate array of inCards
///
function duplicateCards(inCards){

    if (inCards != null && inCards.length > 0) {

        newCards = [];
        newCardsIndex = 0;

        // build cards first
        inCards.forEach(element => {
            newCards.push(duplicateCard(element));
        });

        if (newCards.length > 0) {
            // then use the constructor to build the Deck
            return newCards;
        }
        return null;
    }

    return null;
}

//******************************************** */
// Reset inDeck by duplicating masterCards
// into cards
///
function resetDeck(inDeck){

    // duplicate masterCards 
    // and store in cards
    inDeck.cards = duplicateCards(inDeck.masterCards);

    // reset index to 0
    inDeck.cardsIndex = 0;

    // reset number of learned cards
    inDeck.numLearnedCards = 0;

}




//******************************************** */
// Takes an inDeck and inSubject
// Returns a new Deck with all cards
// whose subject == inSubject 
function buildDeckFromSubject(inDeck, inSubject) {

    if (inDeck.cards.length > 0) {

        newDeckName = inSubject;
        newCards = [];
        newCardsIndex = 0;

        // build cards first
        inDeck.cards.forEach(element => {
            if (element.subject == inSubject) {
                newCards.push(element);
            }
        });

        if (newCards.length > 0) {
            // then use the constructor to build the Deck
            return new Deck(newDeckName, newCards, newCardsIndex);
        }
        return null;
    }

    return null;
}


//******************************************** */
// Takes an inDeck, inSubject, and inUnit
// Returns a new Deck with all cards
// whose subject == inSubject && unit == inUnit
function buildDeckFromSubjectAndUnit(inDeck, inSubject, inUnit) {

    if (inDeck.cards.length > 0) {

        newDeckName = inSubject + " | " + "Unit " + inUnit;
        newCards = [];
        newCardsIndex = 0;

        // build cards first
        inDeck.cards.forEach(element => {
            if (element.subject == inSubject
             && element.unit == inUnit) {
                newCards.push(element);
            }
        });

        if (newCards.length > 0) {
            // then use the constructor to build the Deck
            return new Deck(newDeckName, newCards, newCardsIndex);
        }
        return null;
    }

    return null;
}

//******************************************** */
// Takes an inDeck, inSubject, and inTopic
// Returns a new Deck with all cards
// whose subject == inSubject && topic == inTopic
function buildDeckFromSubjectAndTopic(inDeck, inSubject, inTopic) {

    if (inDeck.cards.length > 0) {

        newDeckName = inSubject + " | " + inTopic;
        newCards = [];
        newCardsIndex = 0;

        // build cards first
        inDeck.cards.forEach(element => {
            if (element.subject == inSubject
             && element.topic == inTopic) {
                newCards.push(element);
            }
        });

        if (newCards.length > 0) {
            // then use the constructor to build the Deck
            return new Deck(newDeckName, newCards, newCardsIndex);
        }
        return null;
    }

    return null;
}


//******************************************** */
// Takes an inDeck, inSubject, inUnit, and inTopic
// Returns a new Deck with all cards
// whose 
// subject == inSubject && unit == inUnit && topic == inTopic
function buildDeckFromSubjectUnitAndTopic(inDeck, inSubject, inUnit, inTopic) {

    if (inDeck.cards.length > 0) {

        newDeckName = inSubject + " | " + inUnit+ " | " + inTopic;
        newCards = [];
        newCardsIndex = 0;

        // build cards first
        inDeck.cards.forEach(element => {
            if (element.subject == inSubject
             && element.unit == inUnit
             && element.topic == inTopic) {
                newCards.push(element);
            }
        });

        if (newCards.length > 0) {
            // then use the constructor to build the Deck
            return new Deck(newDeckName, newCards, newCardsIndex);
        }
        return null;
    }

    return null;
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
        && (deck.numActiveCards > 0) 
        && (deck.numLearnedCards != deck.numActiveCards)) {

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
        && (deck.numActiveCards > 0) 
        && (deck.numLearnedCards != deck.numActiveCards)) {

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

