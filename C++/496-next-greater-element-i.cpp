# include "header.h"

class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        vector<int> res(nums1.size(), -1);
        if (nums1.size() == 0) return res;
        stack<int> st;
        unordered_map<int, int> umap;
        for (int i = 0; i < nums1.size(); i++) {
            umap[nums1[i]] = i;
        } 
        for (int i = 0; i < nums2.size(); i++) {
            while (!st.empty() && nums2[i] > nums2[st.top()]) {
                if (umap.find(nums2[st.top()]) != umap.end()) {
                    res[umap[nums2[st.top()]]] = nums2[i];
                }
                st.pop();
            }
            st.push(i);
        }
        return res;
    }
};