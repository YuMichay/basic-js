const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};
  if (domains.length === 0) {
    return result;
  }
  domains.forEach(elem => {
    let elemKey = '';
    let elemPart = elem.split('.');
    for (let i = elemPart.length - 1; i >= 0; i--) {
      elemKey += '.' + elemPart[i];
      if (result[elemKey] === undefined) {
        result[elemKey] = 0;
      }
      result[elemKey]++;
    }
  });
  return result;
}

module.exports = {
  getDNSStats
};
