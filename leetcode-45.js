/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let times = 0, reached = 0, max = 0
    for(let i = 0; i < nums.length; i++ ){
        if( reached < i ){
            times ++
            reached = max
        }
        max = Math.max(max, i + num[i])
    }
    return times
};
