// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let str = ""
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i).toUpperCase()) {
            str += " " + string.charAt(i)
        }
        else {
            str += string.charAt(i)
        }
    }
    return str
}

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
  Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
  
  });
  });