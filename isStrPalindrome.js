// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    if (x.length === "") {
      return true
    }
    
    let start = 0
    let end = x.length -1
    const str = x.toLowerCase()
    
    while (start < end) {
      if (str.charAt(start++) !== str.charAt(end--)) {
        return false
      }
    }
    return true
  }

  const { assert } = require('chai');

  describe("Fixed tests", function() {
    it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
    it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
    it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
    it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
    it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
    it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
    it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
    it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
  });