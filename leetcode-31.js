/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    let i = len - 2;
    let j = len - 1;

    while (i >= 0 && nums[i] >= nums[i + 1]) i -- ;
    if(i >= 0 ) {
        while (j > 1 && nums[j] <= nums[i]) j--;
        swap(nums, i, j);
        reverse(nums, i + 1, len - 1);
    } else {
        reverse(nums, 0, len - 1);
    }
}


var swap = function (arr, from, to){
    var tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}


var reverse = function ( arr, start, end ) {
    while ( start < end ) {
        swap(arr, start, end);
        start++ ;
        end-- ;
    }
};