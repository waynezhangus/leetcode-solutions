// two pointers
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lo = 0;
    for (let hi = 0; hi < nums.length; hi++) {
        if (nums[hi] !== 0) {
            nums[lo] = nums[hi];
            if (lo != hi) nums[hi] = 0;
            lo++;
        }
    }
};