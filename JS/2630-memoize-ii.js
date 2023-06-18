//Function input and Output

/**
 * @param {Function} fn
 */
class TrieNode {
  children = new Map();
  value = null;
  hasValue = false;
}

class Result {
  constructor(value = null, success = false) {
    this.value = value;
    this.success = success;
  }
}

class Trie {
  root = new TrieNode();
  getValue(path) {
    let n = path.length;
    let cur = this.root;
    for (let i = 0; i < n; i++) {
      let key = path[i];
      if (cur.children.has(key)) {
        cur = cur.children.get(key);
      } else {
        return new Result();
      }
    }
    if (cur.hasValue) {
      return new Result(cur.value, true);
    } else {
      return new Result();
    }
  }
  setValue(path, value) {
    let n = path.length;
    let cur = this.root;
    for (let i = 0; i < n; i++) {
      let key = path[i];
      if (!cur.children.has(key)) {
        cur.children.set(key, new TrieNode());
      }
      cur = cur.children.get(key);
    }
    cur.hasValue = true;
    cur.value = value;
  }
}

function memoize(fn) {
  let trie = new Trie();
  return function (...args) {
    let result = trie.getValue(args);
    if (result.success) {
      return result.value;
    } else {
      let value = fn.apply(this, args);
      trie.setValue(args, value);
      return value;
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
