/**
 * Question: Give a 2D array containing only 1's(land) and O's(water)
 * count the number of islands.
 * 
 * An island is land connected horizontally or vertically. but not diagonally
 */

// Time: O(n), Space: O(n)
const traversalDFS = function (matrix) {
    const seen = new Array(matrix.length).fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

    const values = [];

    dfs(matrix, 0, 0, seen, values);
    return values;
}

const dfs = function(matrix, row, col, seen, values) {
    if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col])
        return;

    values.push(matrix[row][col]);
    seen[row][col] = true;

    const directions = [
        [-1, 0], //up
        [0, 1], //right
        [1, 0], //down
        [0, -1] //left
    ];

    for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
    }
}
// my solution: dfs traversal

// 0. Generate the seen array list
// 1. Traverse the array
// 2. generate the Island
// 3. store each generated island in num of island array
// 4. return the count of num of island as the answer

const getNumberOfConnectedIsland = function (array) {
    const seen = new Array(matrix.length).fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

    const numberOfIsland = [];
    const islandFormation = [];
}