#include "header.h"

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int res = 0, sum = 0;
        unordered_map<int, int> map;
        map[sum]++;
        for (int num : nums) {
            sum += num;
            res += map[sum - k];
            map[sum]++;
        }
        return res;
    }
};