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

const dijstraSolution = function (times, numberOfNodes, startNode, endNode) {
    const infinityArray = new Array(numberOfNodes).fill(Infinity);
    
}

dijstraSolution(times, 5, 1, 3);