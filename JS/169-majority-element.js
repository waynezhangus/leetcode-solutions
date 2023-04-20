/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res, count = 0;
    for (let num of nums) {
        if (count == 0) res = num;
        if (res == num) count++;
        else count--;
    }
    return res;
};