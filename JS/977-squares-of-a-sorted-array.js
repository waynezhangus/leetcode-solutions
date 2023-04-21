// two pointers
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let numsSq = nums.map(item => item**2);
    let lo = 0, hi = nums.length - 1;
    let res = [];
    while (lo <= hi) {
        if (numsSq[lo] > numsSq[hi]) res.push(numsSq[lo++]);
        else res.push(numsSq[hi--])
    }
    return res.reverse();
};