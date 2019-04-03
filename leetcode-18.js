var fourSum = function (nums, target) {
    let res = [];
    let l = nums.length;
    //由小到大排序
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < l - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < l - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            let L = j + 1, R = l - 1;
            while (L < R) {
                if (nums[i] + nums[j] + nums[L] + nums[R] > target) {
                    R--;
                } else if (nums[i] + nums[j] + nums[L] + nums[R] < target) {
                    L++;
                } else {
                    res.push([nums[i], nums[j], nums[L], nums[R]]);
                    while (nums[L] == nums[L + 1]) L++;
                    while (nums[R] == nums[R - 1]) R--;
                    L++;
                    R--;
                }
            }
        }
    }
    return res;
};