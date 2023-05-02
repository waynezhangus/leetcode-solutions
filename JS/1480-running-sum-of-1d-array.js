/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  let res = [];
  for (let num of nums) {
    sum += num;
    res.push(sum);
  }
  return res;
};
