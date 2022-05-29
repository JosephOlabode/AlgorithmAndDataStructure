/**
 * On a give n * n chessboard, a knight piece will start at the
 * r-th row and c-th column. The knight will attempt to make
 * k moves.
 * 
 * A knight can move in 8 possible ways. Each move will choose
 * one of these 8 at random. The knight continues moving until
 * it finishes k moves or it moves off the chessboard. Return
 * the probability that the knight is on the chessboard after
 * it finishes moving.
 */

const DIRECTIONS = [[-2, -1], [-2, 1],[-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

// Time: O(8 ^ k), Space: O( 8 ^ k)
const knightProbability = function(N, k, r, c) {
    if(r < 0 || r >= N || c < 0 || c >= N) return 0;

    if(k === 0) return 1;

    let res = 0;

    for(let i = 0; i < DIRECTIONS.length; i++) {
        const dir = DIRECTIONS[i];
        res += knightProbability(N, k - 1, r + dir[0], c + dir[1])/ 8;
    }
    return res;
}

// this an improved solution with dp
// Time: O((N ^ 2) * k), Space: O((N ^ 2) * k)
const knightProbability2 = function(N, k, r, c) {
    const dp = new Array(k + 1).fill(0)
    .map(() => new Array(N).fill(0)
    .map(() => new Array(N).fill(undefined)));

    return recurse(N, k, r, c, dp);

}

const recurse = function (N, k, r, c, dp) {
    if(r < 0 || c < 0 || r >= N || c >= N) return 0;
    if(k === 0) return 1;

    if(dp[k][r][c] !== undefined) return dp[k][r][c];
    let res = 0;

    for(let i = 0; i < DIRECTIONS.length; i++) {
        const dir = DIRECTIONS[i];

        res += recurse(N, k - 1, r + dir[0], c + dir[1], dp) / 8;
    }

    dp[k][r][c] = res;
    return dp[k][r][c];
}

// Developing the tabulation solution bottom-up solution

//Time: O((N ^2) * k), Space: O((N ^2) * k)
const knightProbability3 = function(N, k, r, c) {
    const dp = new Array(k + 1).fill(0).map(() => new Array(N).map(() => new Array(N).fill(0)));

    dp[0][r][c] = 1;
    for(let step = 1; step <= k; step++) {
        for(let row = 0; row < N; row++) {
            for(let col = 0; col < N; col++) {
                const dir = DIRECTIONS[i];
                const prevRow = row + dir[0];
                const prevCol = col + dir[1];

                if(prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
                    dp[step][row][col] += dp[step - 1][prevRow][prevCol] / 8;
                }
            }
        }
    }

    let res = 0;
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            res += dp[k][i][j];
        }
    }

    return res;
}