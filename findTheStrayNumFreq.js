// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    const freq = {}
    for (let i = 0; i < numbers.length; i++) {
        if (!freq.hasOwnProperty(numbers[i])) {
            freq[numbers[i]] = 1
        } else {
            freq[numbers[i]]++
        }
    }
    for (let j in freq) {
        if (freq[j] % 2 !== 0) {
            return parseInt(j)
        }
    }
}

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(stray([1, 1, 2]), 2);
    });
  });
  