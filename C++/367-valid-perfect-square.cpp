class Solution {
public:
    bool isPerfectSquare(int num) {
        if (num < 2) {
            return true;
        }
        long pivot, left = 2, right = num / 2;
        while (left <= right) {
            pivot = left + (right - left) / 2;
            long sqr = pivot * pivot;
            if (sqr < num) {
                left = pivot + 1;
            } else if (sqr > num) {
                right = pivot - 1;
            } else {
                return true;
            }
        }
        return false;
    }
};