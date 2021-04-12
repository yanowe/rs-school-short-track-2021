/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  for (let i = 0; i < domains.length; i++) {
    arr[i] = domains[i].split('.').reverse();
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j - 1] !== undefined) {
        arr[i][j] = `${arr[i][j - 1]}.${arr[i][j]}`;
      } else arr[i][j] = `.${arr[i][j]}`;
    }
  }
  const arrDomains = arr.flat();
  return arrDomains.reduce((count, item) => {
    const result = count;
    result[item] = (result[item] || 0) + 1;
    return result;
  }, {});
}

module.exports = getDNSStats;
