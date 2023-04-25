#include "header.h"
 
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* header  = new ListNode(0);
        header->next = head;
        ListNode* current = header;
        while (current->next != nullptr) {
            if (current->next->val == val) {
                ListNode* temp = current->next;
                current->next = temp->next;
                delete temp;
            } else {
                current = current->next;
            }
        }
        head = header->next;
        delete header;
        return head;
    }
};