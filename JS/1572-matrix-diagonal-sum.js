/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0;
    let n = mat.length;
    for (let i = 0; i < n; i++) {
        res += mat[i][i];
        res += mat[i][n - i - 1];
    }
    if (n % 2) {
        let center = Math.floor(n / 2);
        res -= mat[center][center];
    }
    return res;
};