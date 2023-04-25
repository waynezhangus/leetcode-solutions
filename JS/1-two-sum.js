// map

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let umap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (umap.has(nums[i])) {
            return [i, umap.get(nums[i])];
        }
        umap.set(target - nums[i], i);
    }
};