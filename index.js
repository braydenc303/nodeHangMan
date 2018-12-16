//Gameplay: 
//Run command to start game. 

//Display the spaces available in the current word(showString method) console log the current score and incorrect guesses remaining.

//Prompt the user for their guess.

//Check the letter and the word to see if has been guessed correctly. 

//If the word has not been fully guessed, re-display the spaces available and correct letters(showString method) console log the current score and incorrect guesses and prompt the user for their guess. 

//If the word has been guessed correctly add one to the players score, reset the guesses remaining and valid guesses if used, display the spaces available for the next word, console log the current score and incorrect guesses and prompt the user for their guess.

//If all of the words have been guessed, congratulate the user on a perfect round.

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
    validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//An array of valid guesses.
    currentWord();
    //Set the current word
    ask();
    //Ask the user for their guess.
};
//A function to reset the game.

function currentWord(){
    secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
    secretWords.splice(secretWords.indexOf(secretWord), 1);
    word = new Word(secretWord);
};
//A function to randomly choose the next word, remove it from the array of secretWords, and create a word object from it.


currentWord();
//Set the current word.
ask();
//Ask the user for their guess.

function ask(){
    console.log("FIFTH ELEMENT WORD GUESS");
    console.log(word.showString()+"\n");
    console.log(`Score: ${score} | Guesses remaining: ${guesses} | Letters Guessed: ${incorrect}`);
    inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter the letter you would like to guess.",
                    name: "guess",
                    validate: function(guess){
                        if(validGuesses.indexOf(guess)>=0){
                            return true;
                        }
                        return false;
                    }
                }
            ])
            //In the .then:
            .then(function(inquirerResponse){
                //Change the user guess to uppercase.
                var guess = inquirerResponse.guess.toUpperCase();
                //Display the current word to make testing easier.
                validGuesses.splice(validGuesses.indexOf(guess.toLowerCase()),1);
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
            

                //A check to see if all of the letters have been guessed. Most likely a for each loop to check each letter object to see if all of it's objects have a value of true. If so, add one to score and move on to the next word. This logic will be similar to what is used to determine if a bubble sort is finished.
                for(i = 0; i < word.letterObjs.length; i++){
                    complete = true;
                    if(word.letterObjs[i].guessed === false){
                        complete = false;
                        break;
                    }; 
                };
                //Ask the user if they would like to continue with the next word or exit the game.
                if(complete){
                    console.log("\nYou guessed " + secretWord +"\n Try the next one?\n");
                    inquirer
                        .prompt([
                            {
                                name: "continue",
                                type: "list",
                                message: "Play again, or exit?",
                                choices: ["Continue", "Exit\n"]
                            }
                        ])
                          .then (function(res){
                              switch (res.continue) {
                                case "Continue":
                                    resetGame();
                                    break;
                                case "Exit\n":
                                    console.log("Thanks For Playing")
                                    return false;
                              }
                          })
                } else {
                    ask();
                };

        });
};










