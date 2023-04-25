// hash table

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hist = Array(26).fill(0);
    for (let c of s) hist[c.codePointAt() - 'a'.codePointAt()]++;
    for (let c of t) hist[c.codePointAt() - 'a'.codePointAt()]--;
    if(hist.findIndex(cnt => cnt != 0) == -1) return true;
    else return false;
};