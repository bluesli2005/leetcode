/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var m = s.length;
    var n = p.length;

    var dp = [];
    for (var i = 0; i < m + 1; i++) {
        dp.push(new Array(n + 1));
    }
    //  空字符串p匹配空s，结果为true
    dp[0][0] = true;

    //  空字符串p匹配非空s，结果必为false
    for (var i = 0; i < m; i++) {
        dp[i + 1][0] = false;
    }

    //  非空p匹配空s
    for (var j = 0; j < n; j++) {
        dp[0][j + 1] = j > 0 && p[j] === '*' && dp[0][j - 1];
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (p[j] !== '*') {
                dp[i + 1][j + 1] = dp[i][j] && (p[j] === '.' || s[i] === p[j]);
            } else {
                dp[i + 1][j + 1] = dp[i + 1][j - 1] && j > 0 || dp[i + 1][j]
                    || (dp[i][j + 1] && j > 0 && (s[i] === p[j - 1] || p[j - 1] === '.'));
            }
        }
    }
    return dp[m][n];
};