/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const common = [];
  const ar1 = s1.split('');
  const ar2 = s2.split('');
  for (let i = 0; i < ar1.length; i++) {
    if (ar2.indexOf(ar1[i]) !== -1) {
      common.push(ar2.splice(ar2.indexOf(ar1[i]), 1));
    }
  }
  return (common.length);
}

module.exports = getCommonCharacterCount;
