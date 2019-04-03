/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = [];
    let l = nums.length;
    let tmp = Infinity;
    //由小到大排序
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < l - 2; i++){
        if( i > 0 && nums[i] === nums[i-1]) 
            continue;
        let L = i + 1,
            R = l - 1;
        while(L < R){
            let abs = nums[L] + nums[R] + nums[i] -target;
            if( Math.abs(abs) < tmp ) {
               tmp = Math.abs(abs) ;
               res = nums[L] + nums[R] + nums[i];
            }
            if (abs < 0 ) {
               L++
            } else {
               R--;
            }
        }
    }
    return res;
};