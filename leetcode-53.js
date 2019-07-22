/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums){
        //初始化最大和sum、当前和currSum
        let sum = nums[0];
        let currSum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            //取得当前和currSum
            currSum = currSum < 0 ? nums[i] : currSum + nums[i];
            //取得最大和sum
            sum = Math.max(currSum,sum)
        }
        return sum;
    }
};