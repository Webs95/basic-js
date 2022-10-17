const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, options) {
  const {
    repeatTimes,
    separator = '+',
    addition = '',
    additionRepeatTimes,
    additionSeparator = '',
  } = options;

  let addString = `${addition}`;
  return Array(repeatTimes)
    .fill(
      string + Array(additionRepeatTimes).fill(addString).join(additionSeparator)
    )
    .join(separator);
}

module.exports = {
  repeater,
};
