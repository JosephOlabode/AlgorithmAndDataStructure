/**
 * There are total of n courses to take, labeled from 0 to n-1
 * Some courses have prerequisite courses. This is expressed as a pair i.e [1, 0] which indicates you must
 * take course 0 before taking course 1
 * 
 * Given the total number of courses and an array of prerequisite pairs, return
 * if it is possible to finish all courses
 */

// Time: O(P + n^3), Space: O(n^2)
const canFinish = function(n, prerequisite){
    const adjList = new Array(n).fill(0).map(() => []);

    for(let i = 0; i < prerequisite.length; i++) {
        const pair = prerequisite[i];
        adjList[pair[1]].push(pair[0]);
    }

    for(let v = 0; v < n; v++) {
        const queue = [];
        const seen = {};

        for(let i = 0; i < adjList[v].length; i++) {
            queue.push(adjList[v][i]);
        }

        while(queue.length) {
            const current = queue.shift();
            seen[current] = true;

            if(current === v) return false;
            const adjacent = adjList[current];

            for(let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if(!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }
    return true;
}

/**
 * 
 * inDegree = 
 * 0 [  1,
 * 1    1,
 * 2    2,
 * 3    1,
 * 4    2,
 * 5    0 ]
 * 
 * 
 * adjlist = 
 * 0 [ [1],
 * 1   [2],
 * 2   [],
 * 3   [0, 4],
 * 4   []
 * 5   [2, 3, 4] ]
 */
const canFinish2 = function(n, prerequisite) {
    const inDegree = new Array(n).fill(0);
    const adjList = inDegree.map(() => []);

    for(let i = 0; i < prerequisite.length; i++) {
        const pair = prerequisite[i];

        inDegree[pair[0]]++;
        adjList[pair[1]].push(pair[0]);
    }

    const stack = [];

    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            stack.push(i);
        }
    }

    let count = 0;
    while(stack.length) {
        const current = stack.pop();
        count++;

        const adjacent = adjList[current];

        for(let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i];
            inDegree[next]--;
            if(inDegree[next] === 0) {
                stack.push(next);
            }
        }
    }
}