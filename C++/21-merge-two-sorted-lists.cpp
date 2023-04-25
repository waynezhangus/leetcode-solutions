#include "header.h"

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* header = new ListNode();
        ListNode* cur = header;
        while (list1 != nullptr && list2 != nullptr) {
            if (list1->val <= list2->val) {
                cur->next = list1;
                list1 = list1->next; 
            } else {
                cur->next = list2;
                list2 = list2->next;
            }
            cur = cur->next;
        }
        if (list1 == nullptr) cur->next = list2;
        else cur->next = list1;
        return header->next;
    }
};
