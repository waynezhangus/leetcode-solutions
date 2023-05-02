// prefix sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  let sum = 0,
    res = 0;
  map.set(0, 1);
  for (let num of nums) {
    sum += num;
    res += map.get(sum - k) || 0;
    map.set(sum, map.get(sum) + 1 || 1);
  }
  return res;
};
