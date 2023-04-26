#include "header.h"

class Solution {
private:
    vector<int> N;
public:
    void getLPS(string pat) {
        int m = pat.size();
        N = vector<int>(m, 0);
        int ni = -1, i = 0;
        N[0] = ni;
        while (i < m - 1) {
            if (ni < 0 || pat[i] == pat[ni]) {
                i++; ni++;
                N[i] = (pat[i] != pat[ni] ? ni : N[ni]);
            } else {
                ni = N[ni];
            }
        }
    }
    
    int strStr(string haystack, string needle) {
        int n = haystack.size(); int i = 0;
        int m = needle.size(); int j = 0;
        getLPS(needle);
        while (i < n && j < m) {
            if (j < 0 || haystack[i] == needle[j]) {
                i++; j++;
            } else {
                j = N[j];
            }
        }
        return j == m ? i - j : -1; 
    }
};