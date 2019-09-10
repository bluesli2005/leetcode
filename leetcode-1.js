/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var temp = [];
    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        if (temp[target - cur] !== undefined) {
            return [temp[target - cur], i];
        }
        temp[cur] = i;
    }
    return [];
};