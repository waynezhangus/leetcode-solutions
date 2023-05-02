/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((acc, item) => item + acc, 0);
  let curSum = 0;
  for (let [i, num] of nums.entries()) {
    curSum += num;
    if (curSum - num == sum - curSum) return i;
  }
  return -1;
};
