Input: nums1 = [1,1,2]
Output: 2, nums = [1,2]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums2 = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // edge case
    if (nums.length === 0) {
        return 0
    }
    
    // create index variable and set it to 0
    let i = 0
    // iterate through nums, but have index j start at 1 to compare with index i
    for (let j = 1 ; j < nums.length; j++) {
        // if index i and j is not equal, increment index i and assign nums[i] to nums[j]
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
            console.log("this-----:", nums[j])
        }
    }
    // return i plus one to count the last index in the array
    return i + 1
};
console.log(removeDuplicates(nums1))
console.log(removeDuplicates(nums2))