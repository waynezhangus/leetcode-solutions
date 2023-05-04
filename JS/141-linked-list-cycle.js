/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let lo = head,
    hi = head;
  do {
    if (!hi?.next?.next) return false;
    lo = lo.next;
    hi = hi.next.next;
  } while (lo != hi);
  return true;
};
