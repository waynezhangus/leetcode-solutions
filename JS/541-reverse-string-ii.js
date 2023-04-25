// string
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split('');
    let start, end, temp;
    for (let i = 0; i < arr.length; i += 2*k) {
        if (arr.length - i >= k) {
            start = i;
            end = i + k - 1;
        } else {
            start = i;
            end = arr.length - 1;
        }
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr.join('');
};