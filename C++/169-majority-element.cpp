#include <vector>

using namespace std;

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int j;
        int count = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (count == 0) j = i;
            count += (nums[i] == nums[j] ? 1 : -1);
        }
        return nums[j];
    }
};