/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let lo = head,
    hi = head;
  while (hi.next?.next) {
    lo = lo.next;
    hi = hi.next.next;
  }
  return hi.next ? lo.next : lo;
};
