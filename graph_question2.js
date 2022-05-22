/**
 * There are total of n courses to take, labeled from 0 to n-1
 * Some courses have prerequisite courses. This is expressed as a pair i.e [1, 0] which indicates you must
 * take course 0 before taking course 1
 * 
 * Given the total number of courses and an array of prerequisite pairs, return
 * if it is possible to finish all courses
 */

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