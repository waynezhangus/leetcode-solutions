/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let lo = 0, hi = s.length - 1, temp;
    while (lo < hi) {
        [s[lo], s[hi]] = [s[hi], s[lo]];
        lo++;
        hi--;
    }
    return s;
};