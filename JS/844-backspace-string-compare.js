/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function getText(str) {
        let skip = 0;
        let text = [];
        str = str.split('').reverse().join('');
        for (let c of str) {
            if (c == '#') skip++;
            else if (skip != 0) skip--;
            else text.push(c);
        }
        return text.reverse().join('');
    }
    let texts = getText(s);
    let textt = getText(t);
    return texts == textt;
};