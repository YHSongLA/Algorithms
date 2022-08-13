// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"


function remove(string) {
    let myStr = ""
    for (let i = 0; i < string.length; i++) {
        if (i === string.length - 1) {
            if (string[i] === "!") {
                myStr += ""
            }
            else {
                myStr += string[i]
            }
        }
        else {
            myStr += string[i]
        }
    }
    return myStr
}

const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
    const actual = remove(input);
    strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
    it("sample tests", function () {
        doTest("Hi!", "Hi");
        doTest("Hi!!!", "Hi!!");
        doTest("!Hi", "!Hi");
        doTest("!Hi!", "!Hi");
        doTest("Hi! Hi!", "Hi! Hi");
        doTest("Hi", "Hi");
    });
});