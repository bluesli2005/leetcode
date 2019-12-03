/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let MAX = Math.pow(2, 31) - 1,
        MIN = -Math.pow(2, 31),
        result = 0,
        newDividend = Math.abs(dividend),
        newDivisor = Math.abs(divisor),
        flag;
    if (newDividend < newDivisor) {
        return 0;
    }
    if (dividend >= 0 && divisor > 0 || dividend <= 0 && divisor < 0) {
        flag = 1;
    } else {
        flag = -1;
    }
    while (newDividend >= newDivisor) {
        var temp = newDivisor,
            i = 0;
        while (newDividend >= temp << 1) {
            if ((temp << 1) <= 0) {
                break;
            }
            temp = temp << 1;
            i++;
            if (flag > 0 && i > 29) {
                return MAX;
            }
            if (flag < 0 && i > 30) {
                return MIN;
            }
        }
        newDividend -= temp;
        result += Math.pow(2, i);
    }
    return flag > 0 ? result : -result;
};