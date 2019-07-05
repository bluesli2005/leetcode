/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let h = matrix.length
    let w = matrix[0].length
    //对角线转换
    for(let i = 0; i < h ; i ++ ){
        for(let j = 0; j < w - i; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[w - 1 - j ][h - 1 -i];
            matrix[w - 1 - j ][h - 1 -i] = tmp;
        }
    }

    //上下转换
    for(let i = 0; i < h / 2; i++) {
        for(let j = 0; j < w; j++) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[h - 1 - i ][j]
            matrix[h - 1 -i][j] = tmp
        }
    }

    return
};