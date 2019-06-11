/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let starS = null, starP = null;
    let i = 0, j = 0;
    while(s[i]){
        if(s[i] === p [j] || p[j] === '?'){
            i++; j++;
            continue;
        }
        if(p[j] === '*'){
            while(p[j + 1] && p[j + 1] === '*'){
                j++;
            }
            starS = i; starP = j; j++;
            continue;
        }
        if(starS !== null){
            i = starS + 1; j = starP + 1; starS++;
            continue;
        }
        return false;
    }
    while(p[j] === '*'){
        j++;
    }

    return !p[j];
};