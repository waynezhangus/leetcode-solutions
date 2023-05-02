/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === undefined) {
      if (t.slice(0, i).includes(t[i])) return false;
      else map.set(s[i], t[i]);
    } else if (map.get(s[i]) != t[i]) {
      return false;
    }
  }
  return true;
};
