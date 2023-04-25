#include<vector>
#include<unordered_set>

using namespace std;

class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        std::unordered_set<int> results;
        std::unordered_set<int> nums(nums1.begin(), nums1.end());
        for (int num : nums2) {
            if (nums.find(num) != nums.end()) {
                results.insert(num);
            }
        }
        return std::vector<int> (results.begin(), results.end());
    }
};