/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let ways = new Array(1,1);
    for(let i = 0; i < n ; i++) {
        let temp = ways[1];
        ways[1] += ways[0];
        ways[0] = temp;
    }
    return ways[0];
};