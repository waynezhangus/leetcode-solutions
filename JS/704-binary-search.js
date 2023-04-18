// binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        pivot = Math.floor(left + (right - left) / 2);
        if (nums[pivot] == target) return pivot;
        else if (nums[pivot] < target) left = pivot + 1;
        else right = pivot - 1;
    }
    return -1;
};