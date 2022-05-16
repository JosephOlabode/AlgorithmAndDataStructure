/**
 * Give a 2D array containing 0's (empty cell),
 * 1's (fresh orange) and 2's (rotten orange).
 * Every minute, all fresh orange immediately
 * adjacent (4 directions) to rotten oranges will rot.
 * 
 * How many minutes must pass untill all oranges are rotten?
 */


const directions = [
    [-1, 0], [0, 1], [1, 0], [0, -1]
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const orangesRotting = function(matrix) {
    if(matrix.length === 0) return 0;

    const queue = [];
    let freshOranges = 0;

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === ROTTEN) {
                queue.push([row, col]);
            }
            if(matrix[row][col] === FRESH) {
                freshOranges++;
            }
        }
    }

    let currentQueueSize = queue.length;
    let minutes = 0;
    while(queue.length > 0) {
        if(currentQueueSize == 0) {
            minutes++;
            currentQueueSize = queue.length;
        }

        const currentOrange = queue.shift();
        currentQueueSize--;
        const row = currentOrange[0];
        const col = currentOrange[1];

        for(let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];

            const nextRow = currentDir[0] + row;
            const nextCol = currentDir[1] + col;

            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
                continue;
            }

            if(matrix[nextRow][nextCol] === FRESH) {
                matrix[nextRow][nextCol] = 2;
                freshOranges--;
                queue.push([nextRow, nextCol]);
            }
        }
    }

    if(freshOranges > 0) return -1;

    return minutes;
}


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