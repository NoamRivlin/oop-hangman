//Create a Hangman class that represents the game logic
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = parseInt(remainingGuesses);
  }

  guessedLetters = [];

  // 'playing' || 'failed' || 'finished'
  status = "playing" || "failed" || "finished";
  // getPuzzle() is a method that returns a string that represents the current state of the puzzle
  getPuzzle() {
    // Create a new array 'letters' by iterating over each character in 'this.word'
    const letters = this.word
      .map((char) => {
        // Check if the current character is not included in the 'guessedLetters' array
        if (!this.guessedLetters.includes(char)) {
          // If the character is not guessed, replace it with an asterisk '*'
          char = "*";
        }
        return char;
      })
      .join("");
    console.log(letters);
    return letters
  }
  // makeGuess() is a method that takes a single letter as a parameter and updates the game state accordingly
  makeGuess(singleLetter) {
    if (typeof singleLetter !== "string") {
      console.log("Guess is string only");
      return;
    }
    singleLetter = singleLetter.toLowerCase();
    if (this.guessedLetters.includes(singleLetter)) {
      console.log(singleLetter + " has already been guessed");
      return;
    }
    this.guessedLetters.push(singleLetter);
    if (!this.word.includes(singleLetter)) {
      console.log(singleLetter + ' is an incorrect guess');
      this.remainingGuesses--;
    } else {
      console.log(singleLetter + ' is a correct guess');
    }
    console.log(this.remainingGuesses, "remainingGuesses");
    calculateStatus();
  }
  // calculateStatus() is a method that updates the status property based on the current state of the game
  calculateStatus() {
    if (this.remainingGuesses < 1) {
      this.status = "failed";
    }
    if (this.remainingGuesses > 1) {
      this.status = "playing";
    }
    if (letters === this.word) {
      this.status = "finished";
    }
  }
  // getStatusMessage() is a method that returns a string that represents the current status message of the game
  getStatusMessage() { }
}

const newGame = new Hangman("asad", 5);
// newGame.guessedLetters = ['a'];

newGame.makeGuess("a");

// Define a global variable called hangman and assign it to a new instance of Hangman with a random word and a fixed number of guesses
// You can use any words you like, but make sure they are lowercase and have no special characters or numbers
// You can also use any number of guesses you like, but make sure it is reasonable for the difficulty level of your words

// Define a function called render() that updates the puzzle and status paragraphs with their respective values from hangman.getPuzzle() and hangman.getStatusMessage()

// Call render() once at the beginning of your script to display the initial state of the game to the player

// Add an event listener to the window object that listens for the "keypress" event
