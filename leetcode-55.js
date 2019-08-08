/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reach = nums[0]
    for(let i = 0; i < nums.length && reach >= i; i ++) {
        if(i + nums[i] > reach) {
            reach = i + nums[i]
        }
    }
    return reach >= (nums.length - 1)
};