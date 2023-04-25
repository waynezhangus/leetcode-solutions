// set
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(num) {
        let str = num.toString();
        let res = 0;
        for (let c of str) {
            let digit = +c;
            res += digit ** 2;
        }
        return res;
    }
    let res = new Set();
    res.add(n);
    while (true) {
        n = getNext(n)
        if (n == 1) return true;
        if (res.has(n)) return false;
        res.add(n);
    }
};

// generator version
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function* genHappyNum(init) {
        let num = init;
        yield num;
        while (true) {
            let res = 0;
            while (num) {
                res += (num % 10) ** 2;
                num = Math.floor(num / 10)
            }
            num = res;
            yield res;
        }
    }
    let generator = genHappyNum(n);

    let res = new Set();
    for (let num of generator) {
        if (num == 1) return true;
        if (res.has(num)) return false;
        res.add(num);
    }
};