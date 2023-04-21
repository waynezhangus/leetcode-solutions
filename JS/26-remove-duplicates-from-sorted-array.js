/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lo = 0;
    for (let hi = 1; hi < nums.length; hi++) {
        if (nums[hi] != nums[lo]) nums[++lo] = nums[hi];
    }
    return lo + 1;
};