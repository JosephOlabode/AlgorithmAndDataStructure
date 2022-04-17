


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {

    constructor(headNodeData) {
        this.headNode = new Node(headNodeData);
    }

    insertNodeAtEnd(data) {
        let currentNode = this.headNode;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(data);
    }

    insertInBetween(position, data) {
        let currentNode = this.headNode;

        while(currentNode.next !== null && currentNode.data !== position) {
            currentNode = currentNode.next;
        }

        if(currentNode.next !== null && currentNode.data == position){
            let newNode = new Node(data);
            let nextNode = currentNode.next;
            currentNode.next = newNode;
            newNode.next = nextNode;
        } else {
            currentNode.next = new Node(data);
        }
    }

    removeNode(data) {
        let currentNode = this.headNode;
        let previousNode = null;

        while(currentNode.next !== null && currentNode.data !== data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    removeNodeFromEnd() {
        let currentNode = this.headNode;
        let previousNode = null;

        while(currentNode.next !== null ) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
    }

    reverseNodes() {
        let currentNode = this.headNode;
        let nextNode = this.headNode.next;
        let tempNode = null

        while(nextNode.next !== null) {
            tempNode = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = tempNode;
        }
        nextNode.next = currentNode;
        currentNode = nextNode;

        this.headNode.next = null;
        this.headNode = currentNode;
    }

    reverPortionOfList(start, end) {
        let currentNode = this.headNode;
        let nextNode = null;
        let startNode = null;
        let tempNode = null;
        while(currentNode.next !== null && currentNode.data !== start) {
            currentNode = currentNode.next;
        }
        //console.log(currentNode);
        startNode = currentNode;
        nextNode = currentNode.next;

        while(nextNode.next !== null && nextNode.data !== end){
            tempNode = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = tempNode;
        }

        nextNode.next = currentNode;
        currentNode = nextNode;

        startNode.next = currentNode;
    }

    // this is the solution from tutorial but did not work for me
    reverseNodes2() {
        let prev = null;
        let current = this.headNode;

        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev
    }

    printNodes() {
        let currentNode = this.headNode;
        while(currentNode.next !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(currentNode.data);
    }

}

function reverseNodes() {
    const list = new LinkList(1);
    list.insertNodeAtEnd(2);
    list.insertNodeAtEnd(3);
    // list.insertNodeAtEnd(4);
     list.insertNodeAtEnd(5);
     list.insertInBetween(3, 4)
     //list.removeNodeFromEnd();
     list.insertNodeAtEnd(6);
     //list.removeNode(2);

    console.log('Before Reverse Operation');
    list.printNodes();
    console.log('\n')
    list.reverseNodes(3, 5);
    console.log('After Reverse Operation');
    list.printNodes();
}

reverseNodes();

