// Time: O(n), Space: O(n)
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
    return currentNode;
}

// Floyd tortoise and hare algorithm
// Time: O(n), Space: O(1)
function findCycle2(head) {
    let hare = head, tortoise = head;
    while(true) {
        hare = hare.next;
        tortoise = tortoise.next;

        if(hare === null || hare.next === null){
            return false;
        } else {
            hare = hare.next;
        }

        if(tortoise === hare) break;
    }

    let p1 = head, p2 = tortoise;
    while(p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}