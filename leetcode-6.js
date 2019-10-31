/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var map = {};
    var j = 0;
    if (numRows <= 1) {
        return s;
    }
    var boo = true;
    for (var i = 0; i < s.length; i++) {
        if (!map[j]) {
            map[j] = '';
        }
        map[j] = map[j] + s[i];
        if (boo) {
            j++;
            if (j >= numRows) {
                j = j - 2;
                boo = false;
            }
        } else {
            j--;
            if (j < 0) {
                boo = true;
                j = j + 2;
            }
        }
        
    }
    s = '';
    Object.keys(map).forEach(i => {
        s = s + map[i];
    });
    return s;
    
};