#include "header.h"

class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        int sum = 0, res = 0;
        unordered_map<int, int> umap;
        umap[0]++;
        for (int num : nums) {
            sum += num;
            int rem = sum % k >= 0 ? sum % k : sum % k + k;          
            res += umap[rem];
            umap[rem]++;
        }
        return res;
    }
};