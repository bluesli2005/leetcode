/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    dfs(result, nums, 0)
    return result
};

var dfs = (result, nums, start) => {
    if(start === nums.length) {
        result.push([...nums])
    }

    for(let i = start; i < nums.length; i++) {
        swap(nums, start, i)
        dfs(result, nums, start + 1)
        swap(nums, start, i)
    }
}

var swap = (nums, i, j) => {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}