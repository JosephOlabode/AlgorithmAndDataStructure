/**
 * Given a 2D array containing -1's (walls), O's(gates) and
 * INF's (empty room). Fill each empty room with the number
 * of steps to the nearest gate
 * 
 * 
 * If it is impossible to reach a gate, leave INF as the value.
 * INF is eqaul to 2147483647
 */


const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

// Time: O(n), Space: O(n)
const wallsAndGates = function(matrix) {
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === GATE) {
                dfs(matrix, row, col, 0);
            }
        }
    }

    return matrix;
}


const dfs = function(matrix, row, col, currentStep){
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || currentStep > matrix[row][col]) {
        return;
    }

    matrix[row][col] = currentStep;

    for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(matrix, row + currentDir[0], col + currentDir[1], currentStep + 1);
    }
}

const matrix1 = [
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
];

const matrix2 = [
    [INF, -1, 0, INF],
    [-1, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
];