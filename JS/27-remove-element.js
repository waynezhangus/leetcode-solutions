/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length == 0) return 0;
    let lo = 0;
    for (let hi = 0; hi < nums.length; hi++) {
        if (nums[hi] != val) {
            nums[lo++] = nums[hi];
        } 
    }
    return lo;
};