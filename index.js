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
var complete = false;
//a variable that is false until all letters have been guessed correctly.
var score = 0;
//A variable to track the user's score
var incorrect = "";
//A string to display the incorrect guesses so far
var lettersGuessed = [];
//an array that stores the letters already guessed.
var validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//An array of valid guesses that may be used if inquirer validation is implemented. Letters should be removed as they are guessed in each round, and then this should be reset for the next round. 

function resetGame(){
    if(secretWords.length === 0){
        console.log("Congratulations! You got them all right!")
        return false;
    };
    score ++;
//increment the score
    secretWord ="";
//a varible to hold the current word.
    guesses = 6;
//a counter and a function that will end the game if the user has six incorrect guesses.
    complete = false;
//a variable that is false until all letters have been guessed correctly.
    incorrect = "";
//A string to display the incorrect guesses so far
    lettersGuessed = [];
//an array that stores the letters already guessed.
    validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    currentWord();
    ask();
};
//A function to reset the game.

function currentWord(){
    secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    secretWords.splice(secretWords.indexOf(secretWord), 1);
    word = new Word(secretWord);
};
//A function to randomly choose the next word, remove it from the array of secretWords, and create a word object from it.


currentWord();
ask();

function ask(){
    // console.log("ask something");
    // console.log(secretWord);
    console.log("FIFTH ELEMENT WORD GUESS");
    console.log(word.showString()+"\n");
    console.log(`Score: ${score} | Guesses remaining: ${guesses} | Letters Guessed: ${incorrect}`);
    inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter the letter you would like to guess.",
                    name: "guess"
                }
            ])
            //In the .then:
            .then(function(inquirerResponse){
                //Change the user guess to uppercase.
                var guess = inquirerResponse.guess.toUpperCase();
                //Display the current word to make testing easier.
                // console.log(secretWord);
                //Test the guess against the current word.
                var wordBefore = word.showString();
                word.test(guess);
                var WordAfter = word.showString();
                //If the user's guess was incorrect, subtract from remaining guesses, and add to the incorrect guesses.
                if(wordBefore === WordAfter){
                    guesses --;
                    incorrect += guess;
                    //If no guesses remain, end game.
                    if(guesses < 1){
                        console.log("-----------------------------Game Over---------------------------------");
                        return false;
                    };
                };
            
                //Call the showString method for the word after each user input.
                // console.log(word.showString()+"\n");
                // console.log(`Score: ${score} | Guesses remaining: ${guesses} | Letters Guessed: ${incorrect}`);

                //A check to see if all of the letters have been guessed. Most likely a for each loop to check each letter object to see if all of it's objects have a value of true. If so, add one to score and move on to the next word. This logic will be similar to what is used to determine if a bubble sort is finished.
                // console.log(complete);
                // console.log(word.letterObjs);
                for(i = 0; i < word.letterObjs.length; i++){
                    complete = true;
                    // console.log(word.letterObjs[i]);
                    if(word.letterObjs[i].guessed === false){
                        complete = false;
                        // console.log(complete);
                    }; 
                };
                // console.log(word.letterObjs);
                // console.log(complete);
                if(complete){
                    console.log("You guessed " + secretWord +"\n Try the next one.");
                    resetGame();
                } else {
                    ask();
                };

        });
};







//A function to prompt the user reset the game if there are unguessed words remaining, and congratulate them if not.



//Gameplay: 
//Run command to start game. 

//Display the spaces available in the current word(showString method) console log the current score and incorrect guesses remaining.

//Prompt the user for their guess.

//Check the letter and the word to see if has been guessed correctly. 

//If the word has not been fully guessed, re-display the spaces available and correct letters(showString method) console log the current score and incorrect guesses and prompt the user for their guess. 

//If the word has been guessed correctly add one to the players score, reset the guesses remaining and valid guesses if used, display the spaces available for the next word, console log the current score and incorrect guesses and prompt the user for their guess.

//If all of the words have been guessed, congratulate the user on a perfect round.






