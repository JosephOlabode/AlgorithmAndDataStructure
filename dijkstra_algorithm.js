/**
 * There are n network nodes labelled 1 to N.
 * Given a times array, containing edges represented by arrays
 * [u, v, w] where u  is the source node, v is the target node,
 * and w is the time taken to travel from the source node to the
 * target node.
 * 
 * Send a signal from node k, return how long it takes for all
 * node to receive the signal. Return -1 if it's impossible.
 */

const times = [
    [1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],
    [3, 2, 3], [5, 3, 7], [3, 1, 5]
];

const adjList = [
 1,   [2, 4],
 2,   [5],
 4,   [2, 5],
 3,   [2, 1],
 5,   [3]
]

// Time: (ElogN), Space: O(E + N)
// E -> adjency list
const dijstraSolution = function (times, numberOfNodes, startNode) {
    const distance = new Array(numberOfNodes).fill(Infinity);
    const adjList = distance.map(() => []);
    
    distance[k - 1] = 0; // we subtracting one bcos our array index start from 0;

    const heap = new PriorityQueue((a, b) => distance[a] < distance[b]);
    heap.push(k - 1);

    for(let i = 0; i < times.length; i++) {
        const source = times[i][0];
        const target = times[i][1];
        const weight = times[i][2];

        adjList[source - 1].push([target - 1, weight]);
    }

    while(!heap.isEmpty()) {
        const currentVertex = heap.pop();
        const adjacent = adjList[currentVertex];

        for(let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i][0];
            const weight = adjacent[i][1];

            if(distance[currentVertex] + weight < distance[neighboringVertex]) {
                distance[neighboringVertex] = distance[currentVertex] + weight;
                heap.push(distance[neighboringVertex]);
            }
        }
    }

    const ans = Math.max(...distance);
    return ans === Infinity ? -1 : ans;
}

dijstraSolution(times, 5, 1);