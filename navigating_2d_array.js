/**
 * Question: Give a 2D array containing only 1's(land) and O's(water)
 * count the number of islands.
 * 
 * An island is land connected horizontally or vertically. but not diagonally
 */

// my solution: dfs traversal

// 0. Generate the seen array list => done
// 1. Traverse the array
// 2. generate the Island
// 3. store each generated island in num of island array
// 4. return the count of num of island as the answer

const getNumberOfConnectedIsland = function (matrix) {
    const seen = new Array(matrix.length).fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

    const numberOfIsland = [];
    const islandFormation = [];

    dfs(matrix, 0, 0, seen, islandFormation, numberOfIsland);

    console.log(numberOfIsland);
    return numberOfIsland.length;

}

const dfs = function(matrix, row, col, seen, islandFormation, numberOfIsland) {
    if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col])
        return;

    if(matrix[row][col] !== 0) {
        islandFormation.push(matrix[row][col]);
    }
    seen[row][col] = true;
    

    const directions = [
        [-1, 0], //up
        [0, 1], //right
        [1, 0], //down
        [0, -1] //left
    ];

    let nodeConnection = [];
    for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const newRow = row + currentDir[0];
        const newCol = col + currentDir[1];
        
        if(newRow >= 0 && newRow < matrix.length && newCol >= 0 && newCol < matrix[0].length){
            const node = matrix[row + currentDir[0]][col + currentDir[1]];
            if ( node == 0) {
                nodeConnection.push(0);
            }
        }
        
    }

    
    let numberOfZeros = 0;
    for(let i = 0; i < nodeConnection.length; i++) {
        if(nodeConnection[i] == 0) numberOfZeros++;
    }
    if(numberOfZeros >= 3) {
        numberOfIsland.push(islandFormation);
        console.log('Island: ', islandFormation)
        islandFormation = [];
    }
    numberOfZeros = 0;
   
    
    for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(matrix, row + currentDir[0], col + currentDir[1], seen, islandFormation, numberOfIsland);
    }
}

const matrix = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,1],
    [0,0,0,1,1]
];
const matrix2 = [
    [0,1,0,1,0],
    [1,0,1,0,1],
    [0,1,1,1,0],
    [1,0,1,0,1]
]

console.log(getNumberOfConnectedIsland(matrix2));