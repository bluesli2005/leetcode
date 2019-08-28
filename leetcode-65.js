/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s==" ")
        return false;
    var bool=Number(s);
    if(bool == 0)
        return true;
    else
        return Boolean(bool);
};