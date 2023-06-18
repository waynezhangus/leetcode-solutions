/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let resArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    resArray[i] = fn(arr[i], i);
  }
  return resArray;
};
