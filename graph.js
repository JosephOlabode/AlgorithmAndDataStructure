const adjencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
]

// Time: O(n), Space: O(n)
const bfsTraversalOfGraph = function(graph) {
    if(graph.length === 0) return;
    const queue = [...graph[0]];
    const answer = [0];

    while(queue.length){
        const currentElement = queue.shift();

        if(answer.includes(currentElement)) continue;

        answer.push(currentElement);
        queue.push(...graph[currentElement]);
    }
    return answer
}

// Tutor implementation
const traversalBFS = function(graph) {
    const queue = [0];
    const values = [];
    const seen = {};

    while(queue.length) {
        const vertex = queue.shift();
        values.push(vertex);
        seen[vertex] = true;

        const connections = graph[vertex];
        for(let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            if(!seen[connection]) {
                queue.push(connection);
            }
        }
    }

    return values;
}

// not working correctly
const dfsTraversalGraph = function(graph, start) {
    const answer = [];
    const current = graph[start];
    if(current.length === 0) return answer;
    answer.push(start);
    dfsTraversalGraph(graph, current[0])
}

const traversalDfs = function (vertex, graph, values = [],seen) {
    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for(let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        if(!seen[connection]) {
            traversalDfs(connection, graph, values, seen);
        }
    }
    return values;
}
const values = [];
const seen = {};
console.log(traversalDfs(0, adjencyList, 0, values, seen));

//console.log(traversalBFS(adjencyList));
