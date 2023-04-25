#include "header.h"

class Solution {
public:
    int getNext(int n) {
        int sum = 0;
        while (n) {
            sum += (n % 10) * (n % 10);
            n /= 10;
        }
        return sum;
    }
    bool isHappy(int n) {
        int next;
        std::unordered_set<int> res;
        while (1) {
            int next = getNext(n);
            if (next == 1) {
                return true;
            }
            if (res.find(next) != res.end()) {
                return false;
            }
            res.insert(next);
            n = next;
        }
    }
};