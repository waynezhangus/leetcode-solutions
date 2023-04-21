// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode* curA = headA, * curB = headB;
        while (curA != curB) {
            curA = curA == nullptr ? headB : curA->next;
            curB = curB == nullptr ? headA : curB->next;
        }
        return curA;
    }
};