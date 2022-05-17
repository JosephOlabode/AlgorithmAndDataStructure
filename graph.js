const adjencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
]

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

console.log(bfsTraversalOfGraph(adjencyList));
