// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

function Letter(ltr){
//   * A string value to store the underlying character for the letter
    this.ltr = ltr;
//   * A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
};


Letter.prototype.toString = function() {
    if(this.guessed === true) {
        return this.ltr;
    } else {
        return "_";
    };
};
//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

Letter.prototype.check = function(char) {
    if(char === this.ltr) {
        this.guessed = true;
    } else {
        this.guessed = false;
    }
};

var letter = new Letter("x");
letter.check("x");
console.log(letter.toString());

module.exports = Letter;

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// 3. `Letter.js` *should not* `require` any other files.

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)
