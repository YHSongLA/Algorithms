// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
    const freq = {}

    for (let i = 0; i < string.length; i++) {
        if (!freq.hasOwnProperty(string[i])) {
            freq[string[i]] = 1
        } else {
            freq[string[i]]++
        }
    }
    return freq
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 }); 
    assert.deepEqual(count(""), {});    
  });
});