// set
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let cnt = new Set(nums1);
    let res = new Set();
    for (let num of nums2) {
        if (cnt.has(num)) res.add(num);
    }
    return Array.from(res);
};