function Letter (character) {
    this.character= character;
    this.guessed = false;
}

this.currentGuess = function () {
    if (this.guessed === true) {
        return this.character;
    } else {
        return '_'
    }
}

this.newGuess = function (guessedLetter) {
    if (guessedLetter === this.character) {
        this.guessed = true;
        return true
    }
}

module.exports = Letter;