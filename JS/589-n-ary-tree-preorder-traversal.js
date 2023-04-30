// tree

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let st = [];
  let res = [];
  if (root) st.push(root);
  while (st.length) {
    let cur = st.pop();
    if (cur) {
      st.push(cur);
      st.push(null);
      if (cur.children)
        cur.children.forEach((child) => {
          st.push(child);
        });
    } else {
      let node = st.pop();
      res.push(node.val);
    }
  }
  return res.reverse();
};
