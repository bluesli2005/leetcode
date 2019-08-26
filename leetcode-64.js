/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let h = grid.length
    if(!h) return 0

    let w = grid[0].length
    if(!w) return 0

    for(let i = 1; i < h ; ++i) {
        grid[i][0] += grid[i - 1][0]
    }

    for(let j = 1; j < w; ++j) {
        grid[0][j] += grid[0][j - 1]
    }

    for(let i = 1; i < h ; ++ i) {
        for(let j = 1; j < w; ++j) {
            grid[i][j] = Math.min(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j])
        }
    }
    return grid[h - 1][w - 1]
}
