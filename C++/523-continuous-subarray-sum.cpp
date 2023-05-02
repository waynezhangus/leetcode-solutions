#include "header.h"

class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> umap;
        int sum = 0;
        umap[0] = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            int rem = sum % k;
            if (!umap.count(rem)) umap[rem] = i + 1;
            else if (umap[rem] < i) return true;
        }
        return false;
    }
};