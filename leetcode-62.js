/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
// 建立一个 m*n的矩阵 f(x,y) = f(x-1,y) + f(x,y-1)
    var array = [];
    for(var i=0;i<m;i++){
        array[i] = [];
        for(var j=0;j<n;j++){
            if(i===0||j===0){
                array[i][j] = 1;
            }else{
                array[i][j] = 0;
            }
        }
    }
    for(i=1;i<m;i++){
        for(j=1;j<n;j++){
            array[i][j] = array[i-1][j]+array[i][j-1];
        }
    }
    return array[m-1][n-1];
};