/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) { 
        n = -n; 
        x = 1 / x; 
    }
    let res = 1; 
    while (n > 0) { 
        if (n % 2 === 1) {
            res *= x; 
            --n; 
        } 
        x *= x; 
        n /= 2; 
    } 
    return res;
};