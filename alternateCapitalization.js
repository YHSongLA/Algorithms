// en a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s) {
    let a = ""
    let b = ""
    let check = true

    for (let i = 0; i < s.length; i++) {
        if (check) {
            a += s[i].toUpperCase()
            b += s[i].toLowerCase()
        }
        else {
            a += s[i].toLowerCase()
            b += s[i].toUpperCase()
        }

        check = !check
    }
    return [a, b]
};

describe("Basic tests", function(){
    Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
    });