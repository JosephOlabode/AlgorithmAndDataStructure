/**
 * For a give staircase, the i-th step is assigned a non-negative
 * cost indicated by a cost array.
 * 
 * Once you pay the cost for a step, you can either climb one or
 * two steps. Find the minimum cost to reach the top of the staircase.
 * Your first step can either be the first or second step
 */

// Time: O(2 ^ n) , Space: O(n)
const minCostClimbingStairs = function(cost) {
    const n = cost.length;
    return Math.min(minCost(n-1, cost), minCost(n-2, cost));
}

const minCost = function(i, cost) {
    if(i < 0) return 0;
    if(i === 0 || i === 1) return cost[i];

    return cost[i] + Math.min(minCost(i-1, cost), minCost(i-2, cost));
}

// this solution is using dynamic programming top-down approach
// Time: O(n), Space: O(n)
const minCostClimbingStairs2 = function(cost) {
    const n = cost.length;
    return Math.min(minCost2(n-1, cost, dp), minCost2(n-2, cost, dp));
}

const minCost2 = function(i, cost, dp) {
    if(i < 0) return 0;
    if(i === 0 || i === 1) return cost[i];

    if(dp[i] !== undefined) {
        return dp[i]
    } else {
        dp[i] = cost[i] + Math.min(minCost2(i-1, cost, dp), minCost2(i-2, cost, dp));
    }

    return dp[i];
}

// this solution is using dynamic programming bottom-up tabulation approach
// Time: O(n), Space: O(n)
const minCostClimbingStairs3 = function (cost) {
    const dp = [];
    const n = cost.length;
    for(let i = 0; i < n; i++ ) {
       if(i < 2) {
           dp[i] = cost[i];
       } else {
           dp[i] = cost[i] + Math.min(dp[i -1], dp[i - 2]);
       }
    }
    return Math.min(dp[n - 1], dp[n - 2]);
}


// optimized tabulation solution
// Time: O(n), Space: O(1)
const minCostClimbingStairs4 = function (cost) {
    const n = cost.length;
    if(n === 0) return 0;
    if(n === 1) return cost[0];

    let dpOne = cost[0];
    let dpTwo = cost[1];

    for(let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(dpOne, dpTwo);
        dpOne = dpTwo;
        dpTwo = current;
    }

    return Math.min(dpOne, dpTwo);
}