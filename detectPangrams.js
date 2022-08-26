// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g
    let lowercase = string.toLowerCase().replace(regex, "")

    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}

describe("Tests", () => {
    it("test1", () => {
      var string = "The quick brown fox jumps over the lazy dog."
      assert.strictEqual(isPangram(string), true)
    })
    it("test2", () => {
      var string = "This is not a pangram."
      assert.strictEqual(isPangram(string), false)
    });
  });