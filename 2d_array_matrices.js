// Time: O(n ^ 2), Space: O(1)
const normal2DTraversal = function(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
        }
    }
}

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

const traversalBFS = function(matrix) {
    const seen = new Array(matrix.length).fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

    const values = [];
    const queue = [[0,0]];

    while(queue.length) {
        const currentPos = queue.shift();
        const row = currentPos[0];
        const col = currentPos[1];

        if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) continue;

        seen[row][col] = true;
        values.push(matrix[row][col]);

        const directions = [
            [-1, 0], //up
            [0, 1], //right
            [1, 0], //down
            [0, -1] //left
        ];

        for(let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            queue.push([row + currentDir[0], col + currentDir[1]]);
        }
    }
    return values;
}
