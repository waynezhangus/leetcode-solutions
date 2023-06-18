#include "header.h"

class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        if (!root) return 0;
        int middle = 0;
        if (root->left && !root->left->left && !root->left->right) {
            middle = root->left->val;
        }
        return middle + sumOfLeftLeaves(root->left) + sumOfLeftLeaves(root->right);
    }
};