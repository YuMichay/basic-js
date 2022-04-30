const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.getOwnPropertyNames(date).length !== Object.getOwnPropertyNames(new Date).length || Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();
  let season;
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (month === 11 || month === 12 || month === 0 || month === 1) {
      season = 'winter';
    } else if (month > 1 && month < 5) {
      season = 'spring';
    } else if (month > 4 && month < 8) {
      season = 'summer';
    } else if (month > 7 && month < 11) {
      season = 'autumn';
    }
  }
  return season;
}

module.exports = {
  getSeason
};
