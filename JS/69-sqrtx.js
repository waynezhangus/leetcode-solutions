// binary search
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    let mid, midsq, lo = 2, hi = x >> 1;
    while (lo <= hi) {
        mid = lo + ((hi - lo) >> 1);
        midsq = mid ** 2;
        if (midsq == x) return mid;
        else if (midsq < x) lo = mid + 1;
        else hi = mid - 1;
    }
    return hi;
};