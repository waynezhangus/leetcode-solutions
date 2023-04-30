// monotonic stack

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let st = [];
  let map = new Map();
  let cur;
  for (let [i, num] of nums2.entries()) {
    while (st.length && num > nums2[st.at(-1)]) {
      cur = st.pop();
      map.set(nums2[cur], num);
    }
    st.push(i);
  }
  let res = [];
  for (let num of nums1) {
    if (map.has(num)) res.push(map.get(num));
    else res.push(-1);
  }
  return res;
};
