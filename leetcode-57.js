/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let addNew = false; // 表示是否已经将newInterval添加至结果数组
  let result = [];
  for (let i of intervals) {
    if (i.end < newInterval.start) {
      result.push(i);
    } else if (i.end <= newInterval.end) {
      if (i.start < newInterval.start) {
        newInterval.start = i.start
      } else {
        // i.start >= newInterval.start
        // do nothing
      }
    } else {  // i.end > newInterval.end
      if (i.start < newInterval.start) {
        newInterval.start = i.start;
        newInterval.end = i.end;
      } else if (i.start >= newInterval.start && i.start <= newInterval.end) {
        newInterval.end = i.end;
      } else {
        // i.start > newInterval.end
        if (!addNew) {
          result.push(newInterval)
          addNew = true;
        }
        result.push(i)
      }
    }
  }
  if (!addNew) {
    result.push(newInterval)
  }
  return result;
};