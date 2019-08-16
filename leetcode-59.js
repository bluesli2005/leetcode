/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = []
  for (let i = 0; i < n; i ++) {
    res.push(Array(n))
  }
  let left = 0,
      right = n - 1,
      top = 0,
      bottom = n - 1,
      curr = 1
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res[top][i] = curr++
    }
    if (++top > bottom) break
    for (let j = top; j <= bottom; j++) {
      res[j][right] = curr++
    }
    if (--right < left) break
    for (let i = right; i >= left; i--) {
      res[bottom][i] = curr++
    }
    if (--bottom < top) break
    for (let j = bottom; j >= top; j--) {
      res[j][left] = curr++
    }
    if (++left > right) break
  }
  return res
};