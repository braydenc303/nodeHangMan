// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

var Word = require("./word.js");
var inquirer = require("inquirer");

//components required:
var secretWords = ["HI", "THRILLED", "GREEN", "RUBY", "LEELOO", "PERFECT", "FIFTH", "ELEMENT", "FINGER", "CAB", "AUTOWASH", "PRIEST"];
//an array of words to guess
var secretWord ="";
//a varible to hold the current word.
var word;
//a variable to hold the word object made from secretWord.
var guesses = 6;
//a counter and a function that will end the game if the user has six incorrect guesses.
var score = 0;
//A variable to track the user's score
var incorrect = "";
//A string to display the incorrect guesses so far
var lettersGuessed = [];
//an array that stores the letters already guessed.
var validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//An array of valid guesses that may be used if inquirer validation is implemented. Letters should be removed as they are guessed in each round, and then this should be reset for the next round. 
function currentWord(){
    secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    secretWords.splice(secretWords.indexOf(secretWord), 1);
    word = new Word(secretWord);
};
//A function to randomly choose the next word, remove it from the array of secretWords, and create a word object from it.
currentWord();
playGame();

function playGame(){
    console.log(secretWord);
    console.log(word.showString()+"\n");
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the letter you would like to guess.",
                name: "guess"
            }
        ])
        .then(function(inquirerResponse){
            console.log(secretWord);
            console.log(word.showString()+"\n");
            var guess = inquirerResponse.guess.toUpperCase();
            console.log(guess);
            
        });
};


//An inquirer function to take in user guess. 
//perhaps with some validation on the prompt that will prevent the user from guessing a letter repeatedly


//In the .then:

//A call to the showString method for the word after each user input.

//A function to check to see if all of the letters have been guessed. Most likely a for each loop to check each letter object to see if all of it's objects have a value of true. If so, add one to score and move on to the next word. This logic will be similar to what is used to determine if a bubble sort is finished.

//A function to prompt the user reset the game if there are unguessed words remaining, and congratulate them if not.



//Gameplay: 
//Run command to start game. 

//Display the spaces available in the current word(showString method) console log the current score and incorrect guesses remaining.

//Prompt the user for their guess.

//Check the letter and the word to see if has been guessed correctly. 

//If the word has not been fully guessed, re-display the spaces available and correct letters(showString method) console log the current score and incorrect guesses and prompt the user for their guess. 

//If the word has been guessed correctly add one to the players score, reset the guesses remaining and valid guesses if used, display the spaces available for the next word, console log the current score and incorrect guesses and prompt the user for their guess.

//If all of the words have been guessed, congratulate the user on a perfect round.



function resetGame(){
    secretWords = ["hi", "thrilled", "green", "ruby", "leeloo", "perfect", "fifth", "element", "finger", "cab", "autowash", "priest"];
//an array of words to guess
    secretWord ="";
//a varible to hold the current word.
    guesses = 6;
//a counter and a function that will end the game if the user has six incorrect guesses.
    incorrect = "";
//A string to display the incorrect guesses so far
    lettersGuessed = [];
//an array that stores the letters already guessed.
    validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
};


