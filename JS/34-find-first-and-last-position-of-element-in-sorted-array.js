// binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findBound(nums, target, isFirst) {
        let mid, lo = 0, hi = nums.length - 1;
        while (lo <= hi) {
            mid = Math.floor(lo + (hi - lo) / 2);
            if (nums[mid] == target) {
                if (isFirst) {
                    if (mid == 0 || nums[mid - 1] < target) return mid;
                    else hi = mid - 1;
                } else {
                    if (mid == nums.length - 1 || nums[mid + 1] > target) return mid;
                    else lo = mid + 1;
                }
            } 
            else if (nums[mid] < target) lo = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }

    let first = findBound(nums, target, true);
    if (first == -1) return [-1, -1];
    let last = findBound(nums, target, false);
    return [first, last];
}