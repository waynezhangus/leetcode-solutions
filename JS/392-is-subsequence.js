/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let lo = 0,
    hi = 0;
  if (s == "" && t == "") return true;
  for (; hi < t.length; hi++) {
    if (s[lo] == t[hi]) lo++;
    if (lo == s.length) return true;
  }
  return false;
};
