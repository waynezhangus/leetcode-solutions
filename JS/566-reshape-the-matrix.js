// limit method
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let [m, n] = [mat.length, mat[0].length];
    let ni = 0, nj = 0;
    if (r * c != m * n) return mat;

    let res = Array(r).fill().map(() => Array(c).fill());
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (nj == c) {
                nj = 0;
                ni++;
            }
            res[ni][nj] = mat[i][j];
            nj++;
        }
    }
    return res;
}
// math method
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let [m, n] = [mat.length, mat[0].length];
    let total = m * n;
    let res = Array(r).fill().map(() => Array(c).fill());
    if (r * c != total) return mat;
    for (let i = 0; i < total; i++) {
        let [ma, na] = [Math.floor(i / n), i % n];
        let [mb, nb] = [Math.floor(i / c), i % c];
        res[mb][nb] = mat[ma][na];
    }
    return res;
}
