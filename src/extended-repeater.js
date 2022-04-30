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
function repeater(str, options) {
  if (typeof(str) !== 'string') {
    String(str);
  }
  if (typeof(options.addition) !== 'string') {
    String(str)
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  function repeatPart(str = '', repeatTimes = 1, separator) {
    let result = [];
    for (let i = 0; i < repeatTimes; i++) {
      result.push(String(str));
    }
    return result.join(separator);
  }
  let repeatResult = repeatPart(options.addition, options.additionRepeatTimes, options.additionSeparator);
  options.separator = repeatResult + options.separator;
  repeatResult = repeatPart(str, options.repeatTimes, options.separator) + repeatResult;
  return repeatResult;
}

module.exports = {
  repeater
};
