// binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let mid, lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        mid = Math.floor(lo + (hi - lo) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return lo;
};