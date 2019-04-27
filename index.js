var word = require("./words.js");
var inquirer = require("inquirer");
var guessesLeft = 10;
var youLose = false;
var guessedChar = new Set();


var wordChosen = new word();

var guessedChar = wordChosen.letters.length;


function startGame(){
    wordChosen.showChar();
    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Please Guess A Letter!"
        }
    ]).then( function(response){
        guess(response.letter);
        if(!youLose){
            startGame();
        }
    })
}

startGame();

//Logic for responding to guesses
function guess(letter){
    if(letter.length === 1){
        if(!guessedChar.has(letter)){
            guessedChar.add(letter);
        }
        else{
            console.log("Letter has already been guessed!\n");
            return;
        }
        var guessesCorrect = word.checkGuess(letter);
        console.log(guessesCorrect);
        if( guessesCorrect > 0){
            console.log("Correct!\n");
            charLeft -= guessesCorrect;
        }
        else{
            guessesLeft--;
            console.log("Incorrect!  " + guessesLeft + " guesses remaining\n");
        }
    
        if(charLeft === 0){
            console.log("You win!");
            word.showLetters();
            youLose = true;
        }
    
        if(guessesLeft === 0){
            console.log("You lose!");
            console.log("Word was " + word.word)
            youLose = true;
        }

    }
    else{
        console.log("You can only guess one letter at a time!\n");
    }
    
    
}