// hist
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hist = Array(26).fill(0);
    for (let c of magazine) hist[c.codePointAt() - 'a'.codePointAt()]++;
    for (let c of ransomNote) hist[c.codePointAt() - 'a'.codePointAt()]--;
    if (hist.findIndex(cnt => cnt < 0) == -1) return true;
    else return false;
};