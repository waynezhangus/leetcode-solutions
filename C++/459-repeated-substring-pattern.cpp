#include "header.h"

class Solution {
private:
    vector<int> N;
public:
    void getLPS(string s) {
        int n = s.size();
        N = vector<int>(n, 0);
        int ni = -1, i = 0;
        N[i] = ni;
        while (i < n - 1) {
            if (ni < 0 || s[i] == s[ni]) N[++i] = ++ni;
            else ni = N[ni];
        }
    }
    
    bool repeatedSubstringPattern(string s) {
        int n = s.size();
        s.resize(n + 1);
        getLPS(s);
        int last = N[n];
        if (last == 0) return false;
        if (n % (n - last) != 0) return false;
        return true;
    }
};