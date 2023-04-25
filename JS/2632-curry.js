// functional programming
/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried(...args1) {
        if (args1.length >= fn.length){
            return fn.apply(this, args1);
        } else {
            return function (...args2) {
                return curried.apply(this, args1.concat(args2))
            }
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */