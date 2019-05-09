/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s.length || !words.length) return [];
    let ans = [];
    let toFind = {};

    let m = words.length;
    let n = words[0].length;

    for (var i = 0; i < m; i++) {
        toFind[words[i]] = (toFind[words[i]] || 0) + 1;
    }

    for (i = 0; i <= s.length - m * n; i++) {
        var found = {};

        for (var j = 0; j < m; j++) {
            var k = i + n * j ;
            var w = s.substr(k, n);
            if (!toFind[w]) break;
            found[w] = (found[w] || 0) + 1;
            if (found[w] > toFind[w]) break;
        }
        if (j === m) ans.push(i);
    }
    return ans;
};