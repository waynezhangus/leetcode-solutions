#include "header.h"

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int slowIndex = 0;
        for (int fastIndex = 0; fastIndex < nums.size(); fastIndex++) {          
            if (nums[fastIndex] != 0) {
                nums[slowIndex] = nums[fastIndex];
                if (slowIndex != fastIndex) {
                    nums[fastIndex] = 0;
                }
                slowIndex++;
            }             
        }
    }
};