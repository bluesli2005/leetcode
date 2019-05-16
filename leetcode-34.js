/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0, right = len - 1;
  while ( left <= right ){
    let mid =  parseInt((left + right) / 2);
    if(nums[mid] === target){
      left = right = mid;
      while(left - 1 >= 0 && nums[left - 1] === target) left-- ;
      while(left + 1 <= len - 1 && nums[right + 1] === target) right++ ;
      return [left , right];
    }else if(nums[mid] > target){
      right = mid - 1;
    }else if(nums[mid] <target){
      left = mid + 1;
    }
  }
  return res;
};