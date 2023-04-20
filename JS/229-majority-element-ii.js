// Time O(n), Space O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (nums.length == 0) return [];
    let res1, res2, count1 = 0, count2 = 0;
    for (let num of nums) {
        if (num == res1) count1++;
        else if (num == res2) count2++;
        else if (count1 == 0) {res1 = num; count1++;}
        else if (count2 == 0) {res2 = num; count2++;}
        else {count1--; count2--;}
    }
    let res = [];
    let threshold = Math.floor(nums.length / 3);
    if (nums.filter(item => item == res1).length > threshold) res.push(res1);
    if (nums.filter(item => item == res2).length > threshold) res.push(res2);
    return res;
};


// Time O(n), Space O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let umap = new Map();
    let res = [];
    let threshold = Math.floor(nums.length / 3);
    for (let num of nums) {
        if (!umap.has(num)) umap.set(num, 1);
        else umap.set(num, umap.get(num) + 1);
    } 
    for (let pair of umap) {
        if (pair[1] > threshold) res.push(pair[0]);
    }
    return res;
};