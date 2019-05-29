/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let res = 0, sum = 0, n = customers.length;
    for( let i = 0; i < n; i ++ ){
        if( grumpy[i] == 0){
            sum += customers[i]
        }
    }

    let temp = 0;
    for (let i = 0; i < X && X<= n; i++) {
        if(grumpy[i] == 1) {
            temp += customers[i];
        }
    }

    res = Math.max(res, sum + temp);

    for( let i = 1; i <= n-X; i ++) {
        if(grumpy[i - 1] == 1) temp -= customers[i -1];
        if(grumpy[i + X -1] == 1) temp += customers[i + X - 1];
        res = Math.max(res, sum + temp);
    }

    return res;

};