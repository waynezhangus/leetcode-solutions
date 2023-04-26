// string
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    function reverseWord(start, end) {
        while (start < end) {
            [s[start], s[end]] = [s[end], s[start]];
            start++;
            end--;
        }
    }
    s = s.reverse();
    s.push(' ');
    let lo = 0, hi = 0;
    for (; hi < s.length; hi++) {
        if (s[hi] == ' ') {
            reverseWord(lo, hi - 1);
            lo = hi + 1;
        }
    }
    s.pop();
};