/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let map = new Map();
  let sum = 0,
    res = 0;
  map.set(0, 1);
  for (let num of nums) {
    sum += num;
    let rem = sum % k >= 0 ? sum % k : (sum % k) + k;
    res += map.get(rem) | 0;
    map.set(rem, map.get(rem) + 1 || 1);
  }
  return res;
};
