/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
       let count=0, i = 1, temp = [],
    // 检测是否符合要求的工具函数 
    check = function(arr, num) {
         for (let k = 0; k < num; k++) {
             if (arr[k] === arr[num] || Math.abs(arr[k] - arr[num]) === num - k) { 
                 return false;
            }
        }
        return true;
    },
    queens = '.'.repeat(n).split('');
    temp[0] = 0;
    // 回溯法求解
    while (i > 0) {
        temp[i - 1] += 1;
        while (temp[i - 1] <= n){
            if(check(temp, i - 1)) {
                if (i === n) {
                   count += 1;
                }
                temp[i] = 0;
                i += 2;
                break;
            } else {
                temp[i - 1] += 1;
            }
        }
        i--;
    }
    return count
};