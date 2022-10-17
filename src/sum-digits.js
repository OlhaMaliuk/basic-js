const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += Number(str[i]);
  }

  let str1 = String(res);
  let res1 = 0;
  for (let j = 0; j < str1.length; j++) {
    res1 += Number(str1[j]);
  }
  return res1;
}
module.exports = {
  getSumOfDigits,
};
