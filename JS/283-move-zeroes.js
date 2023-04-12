// two pointers
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            nums[slowIndex] = nums[fastIndex];
            if (slowIndex != fastIndex) {
                nums[fastIndex] = 0;
            }
            slowIndex++;
        }
    }
};