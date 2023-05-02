/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let map = new Map();
  let sum = 0,
    rem;
  map.set(0, -1);
  for (let [i, num] of nums.entries()) {
    sum += num;
    let rem = sum % k;
    let val = map.get(rem);
    if (val != undefined) {
      if (i - val >= 2) return true;
    } else {
      map.set(rem, i);
    }
  }
  return false;
};
