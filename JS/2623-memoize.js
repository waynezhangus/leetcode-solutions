//Function input and Output

/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    let key = args.join("-");
    if (cache.has(key)) return cache.get(key);
    else {
      let res = fn.apply(this, args);
      cache.set(key, res);
      return res;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
