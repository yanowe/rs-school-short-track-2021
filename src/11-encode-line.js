/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr1 = str.split('');
  const arr2 = [];
  let k = 1;
  for (let i = 1; i <= arr1.length; i++) {
    if ((arr1[i] === arr1[i - 1]) && (i !== arr1.length)) {
      k++;
    } else {
      if (k !== 1) {
        arr2.push(`${k}${arr1[i - 1]}`);
      } else arr2.push(`${arr1[i - 1]}`);
      k = 1;
    }
  }
  return arr2.join('');
}

module.exports = encodeLine;
