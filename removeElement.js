Input: nums1 = [3,2,2,3], val1 = 3
Output: 2, nums = [2,2]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums2 = [0,1,2,2,3,0,4,2], val2 = 2
Output: 5, nums = [0,1,4,0,3]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = 0 
     while (i < nums.length) {
         if (nums[i] === val) {
             nums[i] = nums[nums.length - 1]
             nums.length--
         }
         else {
             i++
         }
     }
    return i
};

console.log(removeElement(nums1, val1))
console.log(removeElement(nums2, val2))