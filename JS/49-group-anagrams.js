// map & set
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let umap = new Map();
    strs.forEach(str => {
        let key = str.split('').sort().join('')
        if (umap.has(key)) umap.set(key, [...umap.get(key), str]);
        else umap.set(key, [str]);
    })
    return Array.from(umap.values());
};