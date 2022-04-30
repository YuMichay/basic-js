const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  if (result[result.length-1]=='--double-next' || result[result.length-1] == '--discard-next') {
    result.pop();
  }
  if (result[0]=='--double-prev' || result[0]=='--discard-prev') {
    result.shift();
  }
  for (let i = 0; i < result.length; i++) {
    if (i > 1 && (result[i-2] === '--double-next' || result[i-2] === '--double-prev' || result[i-2] === '--discard-prev' || result[i-2] === '--discard-next')) {
      result.splice(i-2, 1);
    }
    if (result[i] == '--double-next') {
      result[i] = result[i+1];
    }
    if (result[i] == '--double-prev') {
      result[i] = result[i-1];
    }
    if (result[i] == '--discard-prev') {
      result.splice(i-1, 2);
    }
    if (result[i] == '--discard-next') {
      result.splice(i, 2);
    }
  }
  return result;
}

module.exports = {
  transform
};
