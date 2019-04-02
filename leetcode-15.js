/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    let s = {};
    let l = nums.length;
    //由小到大排序
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < l - 2; i++){
        if( i > 0 && nums[i] === nums[i-1]) 
            continue;
        let L = i + 1,
            R = l - 1;
        while(L < R){
            if(L < R && nums[L] + nums[R] + nums[i] === 0 && !s[`${nums[i]}${nums[L]}${nums[R]}`]) {
                res.push([nums[i], nums[L], nums[R]]);
                s[`${nums[i]}${nums[L]}${nums[R]}`] = true;
            }

            if(nums[L] + nums[R] + nums[i] < 0) {
                L++
            } else {
                R--;
            }
        }
    }
    return res;
};