#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        std::vector<int> hist (26, 0);
        for (char c : s) hist[c - 'a']++;
        for (char c : t) hist[c - 'a']--;
        std::vector<int>::iterator p;
        p = std::find_if_not(hist.begin(), hist.end(), [](int i){return i == 0;});
        if (p == hist.end()) return true;
        return false;
    }
};