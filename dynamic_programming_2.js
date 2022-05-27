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