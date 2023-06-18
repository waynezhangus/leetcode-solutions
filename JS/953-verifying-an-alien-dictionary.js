/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let dict = new Map();
  for (let i = 0; i < order.length; i++) {
    dict.set(order[i], i);
  }
  for (let i = 1; i < words.length; i++) {
    let lo = words[i - 1];
    let hi = words[i];
    for (let j = 0; j < Math.min(lo.length, hi.length); j++) {
      if (dict.get(lo[j]) > dict.get(hi[j])) return false;
      else if (dict.get(lo[j]) < dict.get(hi[j])) break;
    }
    if (lo.length > hi.length && lo.slice(0, hi.length) == hi) {
      return false;
    }
  }
  return true;
};
