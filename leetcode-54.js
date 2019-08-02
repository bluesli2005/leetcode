/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var ret = [];
    var row = matrix.length;
    if(row === 0){
        return ret;
    }
    var col = matrix[0].length;
    if(col === 0){
        return ret;
    }
    var len = row * col;
    var cur_row = 0;
    var cur_col = 0;
    var pos = 1;
    for( var i = 0;i < len; i++ ){
        switch(pos){
            case 1:
                ret.push(matrix[cur_row][cur_col]);
                matrix[cur_row][cur_col] = null;
                if(cur_col<col-1 && matrix[cur_row][cur_col+1]!==null){
                    cur_col++;
                }else{
                    pos = 2;
                    cur_row++;
                }
                break;
            case 2:
                ret.push(matrix[cur_row][cur_col]);
                matrix[cur_row][cur_col] = null;
                if(cur_row<row-1 && matrix[cur_row+1][cur_col]!==null){
                    cur_row++;
                }else{
                    pos = 3;
                    cur_col--;
                }
                break;
            case 3:
                ret.push(matrix[cur_row][cur_col]);
                matrix[cur_row][cur_col] = null;
                if(cur_col>0 && matrix[cur_row][cur_col-1]!==null){
                    cur_col--;
                }else{
                    pos = 4;
                    cur_row--;
                }
                break;
            case 4:
                ret.push(matrix[cur_row][cur_col]);
                matrix[cur_row][cur_col] = null;
                if(cur_row>1 && matrix[cur_row-1][cur_col]!==null){
                    cur_row--;
                }else{
                    pos = 1;
                    cur_col++;
                }
                break;
        }
    }
    return ret;
}
