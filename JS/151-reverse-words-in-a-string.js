// string
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let res = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != '') {
            res = res.concat(arr[i], ' ');
        }
    }
    res = res.slice(0, res.length - 1)
    return res;
};