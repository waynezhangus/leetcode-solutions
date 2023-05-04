// bit manipulation
var findTheDifference = function (s, t) {
  return String.fromCharCode(
    [...s, ...t].reduce((acc, c) => {
      return acc ^ c.charCodeAt(0);
    }, 0)
  );
};

// difference of sum
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sum1 = s.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const sum2 = t.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return String.fromCharCode(sum2 - sum1);
};

// sorting
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] != t[i]) return t[i];
  }
  return t[t.length - 1];
};
