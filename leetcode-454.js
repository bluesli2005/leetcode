/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let cnt = 0;
    let map = {};
    let n = A.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let sum = A[i] + B[j];
            if (!map[sum]) map[sum] = 1;
            else map[sum]++;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let sum = C[i] + D[j];
            if (map[-sum] !== undefined)
                cnt += map[-sum];
        }
    }
    return cnt;
};