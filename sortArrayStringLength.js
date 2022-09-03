// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


function sortByLength(array) {
    const arr = []

    for (let i = 0; true; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j].length === i) {
                arr.push(array[j])
            }
            if (arr.length === array.length) {
                return arr
            }
        }
    }
};

describe("Example tests",function(){
    it("Test 1",function(){
      Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
    });
    it("Test 2",function(){
      Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
    });
    it("Test 3",function(){
      Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
    });
  });