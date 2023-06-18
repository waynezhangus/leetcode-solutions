#include "header.h"

class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode* fast = head, * slow = head;
        do {
            if (fast == nullptr || fast->next == nullptr) return NULL;
            fast = fast->next->next;
            slow = slow->next;
        } while (fast != slow);
        slow = head;
        while (fast != slow) {
            fast = fast->next;
            slow = slow->next;
        }
        return fast;
    }
};