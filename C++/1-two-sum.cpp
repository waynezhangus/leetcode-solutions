#include "header.h"

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::unordered_map<int, int> res;
        for (int i = 0; i < nums.size(); i++) {
            int rest = target - nums[i];
            auto iter = res.find(rest);
            if (iter != res.end()) {
                return {res[rest], i};
            }
            res.insert(std::pair<int, int> (nums[i], i));
        }
        return {};
    }
};