// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    var count = 0
    newStr = str.toLowerCase()
  
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === "x") {
        count++
      }
      if (newStr[i] === "o") {
        count--
      }
    }
    return count == false
}

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(XO('xo'),true);
  Test.assertEquals(XO("xxOo"),true);
  Test.assertEquals(XO("xxxm"),false);
  Test.assertEquals(XO("Oo"),false);
  Test.assertEquals(XO("ooom"),false);
    });
  });