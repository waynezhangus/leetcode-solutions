// nullish coalescing
var mergeAlternately = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? "") + (b[i] ?? "");
  }

  return result;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let len1 = word1.length,
    len2 = word2.length;
  for (let i = 0; i < Math.min(len1, len2); i++) {
    res = res.concat(word1[i], word2[i]);
  }
  if (len1 < len2) res = res.concat(word2.slice(len1));
  else res = res.concat(word1.slice(len2));
  return res;
};
