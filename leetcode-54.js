/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
if (matrix.length === 0) return []
  let tag = [],
      l = matrix.length,
      w = matrix[0].length,
      pos = 1,  // 1右，2下，3左，4上
      res = []
  for (let i = 0; i < w; i++) {
    tag[i] = [];
    for (let j = 0; j < l; j++) {
      tag[i][j] = 1;  // 1：未添加，0：已添加
    }
  }
  let r = 0,
      c = 0;
  while(tag[r] && tag[r][c] === 1) {
    res.push(matrix[r][c])
    tag[r][c] = 0
    switch(pos) {
      case 1:
        if (!tag[r][c+1]) {
          pos = 2
          r++
        } else {
          c++
        }
        break
      case 2:
        if (tag[r+1] && tag[r+1][c]) {
          r++
        } else {
          pos = 3
          c--
        }
        break
      case 3:
        if (!tag[r][c-1]) {
          pos = 4
          r--
        } else { c-- }
        break
      case 4:
        if (!tag[r-1][c]) {
          pos = 1
          c++
        } else {
          r--
        }
        break
    }
  }
  return res;
};