// binary search
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true;
    let mid, midSq, lo = 2, hi = num >> 1;
    while (lo <= hi) {
        mid = lo + ((hi - lo) >> 1);
        midSq = mid ** 2;
        if (midSq == num) return true;
        else if (midSq < num) lo = mid + 1;
        else hi = mid - 1;
    }
    return false;
};