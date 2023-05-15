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
    if (typeof singleLetter !== "string" || !singleLetter.match(/[a-z]/i)) {
      throw new Error('Guess is string a-z characters only')
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
    this.calculateStatus();
    this.getStatusMessage()
    render()
  }
  // calculateStatus() is a method that updates the status property based on the current state of the game
  calculateStatus() {
    const currPuzzle = this.getPuzzle()
    if (this.remainingGuesses < 1) return this.status = "failed";
    if (currPuzzle === this.word.join('')) return this.status = "finished";
    return this.status = "playing";
  }
  // getStatusMessage() is a method that returns a string that represents the current status message of the game
  getStatusMessage() {
    if (this.status === 'playing') return `Guesses left:${this.remainingGuesses}`
    else if (this.status === 'failed') return `Game over Jimbo, the word was ${this.word.join('')}`
    if (this.status === 'finished') return 'Nice one Jimbo congrats'
  }
}

const newGame = new Hangman("asad", 5);
render()
// newGame.makeGuess('a');
// newGame.makeGuess('s');
// newGame.makeGuess('b');
// newGame.makeGuess('d');

// Define a global variable called hangman and assign it to a new instance of Hangman with a random word and a fixed number of guesses
// You can use any words you like, but make sure they are lowercase and have no special characters or numbers
// You can also use any number of guesses you like, but make sure it is reasonable for the difficulty level of your words

// Define a function called render() that updates the puzzle and status paragraphs with their respective values from hangman.getPuzzle() and hangman.getStatusMessage()
function render() {
  const puzzleEl = document.getElementById("puzzle");
  const statusEl = document.getElementById("status");
  const guessedEl = document.getElementById("guessed-letters");

  puzzleEl.textContent = newGame.getPuzzle();
  statusEl.textContent = newGame.getStatusMessage();
  guessedEl.textContent = newGame.guessedLetters;
}

window.addEventListener('keypress', (e) => {
  const guess = e.key.toLowerCase()
  newGame.makeGuess(guess)

})

// Call render() once at the beginning of your script to display the initial state of the game to the player

// Add an event listener to the window object that listens for the "keypress" event
