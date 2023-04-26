// string

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    function getLPS(pat) {
        let N = Array(pat.length).fill(-1);
        let i = 0, ni = -1;
        while (i < pat.length - 1) {
            if (ni < 0 || pat[i] == pat[ni]) N[++i] = ++ni;
            else ni = N[ni];
        }
        return N;
    }
    let N = getLPS(needle);
    let i = 0, j = 0;
    while (i < haystack.length && j < needle.length) {
        if (j < 0 || haystack[i] == needle[j]) {
            i++; j++;
        } else {
            j = N[j];
        }
    }
    return j == needle.length ? i - j : -1;
};