/**
 * STEPS TO SOLVING A GRAPH PROBLEM
 * 1. Transform the statement into a structure
 * 2. Develop the adjency representation from the structure -> either adjency list or adjency matrix
 * 3. Choose the best traversal mechanism to use to get ur answer (bfs, dfs).
 */

const numOfMinutes = function(n, headId, managers, informTime) {
    const adjList = managers.map(() => []);

    for(let e = 0; e < n; e++) {
        const manager = managers[e];

        if(manager === -1) continue;
        adjList[manager].push(e);
    }

    return dfs(headId, adjList, informTime);
}

const dfs = function (currentId, adjList, informTime) {
    
}