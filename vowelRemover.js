// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

function shortcut(string) {
    let vowels = "aeiou"

    let str = ""

    for (let i = 0; i < string.length; i++) {
        if (!(vowels.indexOf(string[i]) > -1)) {
            str += string[i]
        }
    }
    return str
}

const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

it("sample tests", () => {
  doTest('hello', 'hll');
  doTest('how are you today?', 'hw r y tdy?');
  doTest('complain', 'cmpln');
  doTest('never', 'nvr');
});