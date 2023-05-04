/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let lo = head,
    hi = head;
  do {
    if (!hi?.next?.next) return null;
    lo = lo.next;
    hi = hi.next.next;
  } while (lo != hi);
  lo = head;
  while (lo != hi) {
    lo = lo.next;
    hi = hi.next;
  }
  return hi;
};
