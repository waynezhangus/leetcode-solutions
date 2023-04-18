#include <vector>

using namespace std;

class Solution {
private:
    int searchBound(vector<int>& nums, int target, bool isFirst) {
        int mid, left = 0, right = nums.size() - 1;
        while (left <= right) {
            mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                if (isFirst) {
                    if (mid == 0 || nums[mid - 1] < target) return mid;
                    else right = mid - 1;
                } else {
                    if (mid == nums.size() - 1 || nums[mid + 1] > target) return mid;
                    else left = mid + 1;
                }
            } 
            else if (target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }
        return -1;
    }
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = searchBound(nums, target, true);
        if (first == -1) return {-1, -1};
        int last = searchBound(nums, target, false);
        return {first, last};
    }
};