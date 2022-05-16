/**
 * Give a 2D array containing 0's (empty cell),
 * 1's (fresh orange) and 2's (rotten orange).
 * Every minute, all fresh orange immediately
 * adjacent (4 directions) to rotten oranges will rot.
 * 
 * How many minutes must pass untill all oranges are rotten?
 */

const matrix1 = [
    [2, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1]
]
const matrix2 = [
    [1, 1, 0, 0, 0],
    [2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2],
    [0, 1, 0, 0, 1]
]