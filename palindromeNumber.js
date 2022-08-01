// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

 

// Example 1:

Input: x1 = 121
Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

Input: x2 = -121
Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

Input: x3 = 10
Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    const str = x.toString()
    let start = 0
    let end = str.length - 1
    
    if (x < 0 || (x % 10 === 0 && x != 0)) {
        return false
    }
    
    while (start < end) {
        if(str.charAt(start++) !== str.charAt(end--)) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(x1))
console.log(isPalindrome(x2))
console.log(isPalindrome(x3))