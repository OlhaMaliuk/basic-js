const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxDigit = 0;
  const str = String(n);
  for (i = 0; i < str.length; i++) {
    const number = Number(str.substring(0, i).concat(str.substring(i + 1)));
    if (number > maxDigit) {
      maxDigit = number;
    }
  }
  return maxDigit;
}

module.exports = {
  deleteDigit,
};
