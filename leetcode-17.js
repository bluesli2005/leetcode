/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letters = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
  };
  if (digits.length === 0) return [];  // 递归停止条件
  const c = digits[0];
  const rest = digits.slice(1);
  const restResult = letterCombinations(rest);  //获取剩余数字的可能组合
  const result = [];
  letters[c].forEach((letter) => {
    if (restResult.length === 0) {  //处理一位数字的特殊情况
      result.push(letter);
    }
    restResult.forEach((str) => {
      result.push(`${letter}${str}`);
    });
  });
  return result;
};