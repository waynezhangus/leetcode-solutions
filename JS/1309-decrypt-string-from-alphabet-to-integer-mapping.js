/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let arr = s.split("#");
  let res = [];
  for (let item of arr.slice(0, -1)) {
    for (let num of item.slice(0, -2)) {
      res.push(String.fromCodePoint("a".codePointAt() + +num - 1));
    }
    res.push(String.fromCodePoint("a".codePointAt() + +item.slice(-2) - 1));
  }
  for (let num of arr.at(-1)) {
    res.push(String.fromCodePoint("a".codePointAt() + +num - 1));
  }
  return res.join("");
};
