var letter = require("./letters.js");


function Word(){

    var letters = [];

    var wordsArr = ["swordfish", "hammerhead", "narwhal", "vaquita", "walrus"];
    

    var chosenWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    this.chosenWord = chosenWord;
    var word = chosenWord.split("");

    word.forEach( function(char){
        var value = new letter(char);
        letters.push(value);
    });

    this.letters = letters;

    this.showChar = function(){
        var display = "";
        this.letters.forEach( function(letter){
            display += letter.currentGuess() + " ";
        });

        display = display.slice(0, -1);

        console.log(display);
    }

    this.checkGuess = function( guess ){
        var correctChar = 0;
        this.letters.forEach( function(letter){
            if( letter.guessed === false && letter.newGuess(guess) === true){
                letter.guessed = true;
                correctChar++;
            }
        });

        return correctChar;
        
    }
}

module.exports = Word;