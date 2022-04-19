function findCycle(head) {
    let currentNode = head;
    let seenNodes = new Set();

    while(!seenNodes.has(currentNode)) {
        if(currentNode.next == null) {
            return false;
        }
        seenNodes.add(currentNode);
        currentNode = currentNode.next;
    }
}