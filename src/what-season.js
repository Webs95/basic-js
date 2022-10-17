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
let currentMonth;

function getSeason(date) {
  if (date instanceof Date) {
    currentMonth = date.getMonth() + 1;
    if (currentMonth > 3 && currentMonth < 6) {
      return 'spring';
    }

    if (currentMonth > 6 && currentMonth < 9) {
      return 'summer';
    }

    if (currentMonth > 9 && currentMonth < 12) {
      return 'autumn';
    }

    if (currentMonth >= 1 && currentMonth < 3) {
      return 'winter';
    }
  } else {
    return 'Invalid date!';
  }
}

module.exports = {
  getSeason,
};
