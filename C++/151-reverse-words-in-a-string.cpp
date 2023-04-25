#include "header.h"

class Solution {
public:
    string reverseWords(string s) {
        std::reverse(s.begin(), s.end());
        int fast = 0, slow = 0;
        int start;
        for (; fast < s.size(); fast++) {
            if (s[fast] != ' ') {
                if (slow) s[slow++] = ' ';
                start = slow;
                while (fast < s.size() && s[fast] != ' ') {
                    s[slow++] = s[fast++];
                }
                std::reverse(s.begin() + start, s.begin() + slow);
            }
        }
        s.erase(s.begin() + slow, s.end());
        return s;
    }
};