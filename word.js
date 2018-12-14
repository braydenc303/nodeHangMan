// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:



// 4. `Word.js` *should only* require `Letter.js`

var Letter = require("./letter.js");
//The word argument will be passed in from the array contained in index.js
function Word(word){
    //   * An array of `new` Letter objects representing the letters of the underlying word
    // creating a new array
    var arr = []
    //splitting the current word into an array of strings for each letter.
    var letters = word.split("");
    //creating a new instance of Letter for each letter in the word, and pushing these into the array.
    //The char argument here is coming from the letters array that was created from the word.split method above. This for each loop creates a new Letter object using the constructor in letter.js from each char passed in.
    letters.forEach(function(char){
        var ltr = new Letter(char);
        arr.push(ltr);
    })
    //assigning the array to this.letterObjs
    this.letterObjs = arr;
};




//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
//create a method to show the string.
Word.prototype.showString = function(){
    //creating a new string
    var myString = "";
    //call the to string method from letter for each object in the letterObjs array and concatenate them together with spaces in between.
    //The ltrObj argument is an individual object from the letterObjs array.
   this.letterObjs.forEach(function(ltrObj){
     myString += ltrObj.toString() + " ";
   })
// return the resulting string.
   return myString;
};

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
//The char argument will be passed in from inquirer and checked against each letter object in the word by using the check method from Letter.js
Word.prototype.test = function(char){
    this.letterObjs.forEach(function(ltrObj){
        ltrObj.check(char);
    });
};

module.exports = Word;

//These lines were used to test this file.
// var word = new Word("hello");
// console.log(word.showString());
// word.test("l");
// console.log(word.showString());
// word.test("h");
// console.log(word.showString());


