/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    s = '#' + s.split('').join('#') + '#';
    let maxRight = 0,
        pos = 0,
        RL = new Array(s.length),
        center = 0,
        maxR = 1;
    for (let i = 0; i < s.length; i++) {
        if (i < maxRight) {
            RL[i] = Math.min(RL[2*pos-i],maxRight-i);
        }
        else {
            RL[i] = 1;
        }
        while(i + RL[i] < s.length && i - RL[i] >= 0 && s[i+RL[i]] === s[i-RL[i]]) {
            RL[i] += 1;
        }
        if (RL[i] + i - 1 > maxRight) {
            maxRight = RL[i] + i - 1;
            pos = i;
        }
        if (RL[i] > maxR) {
            center = i;
            maxR = RL[i];
        }
    }
    return s.slice(center-maxR+1,center+maxR).split('#').join('')
};