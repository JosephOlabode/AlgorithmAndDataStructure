class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
        this.child = null;
    }
}

class DoublyLinkedList {
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

    insertChildNode(position, data) {
        let currentNode = this.headNode;
        while(currentNode.next !== null && currentNode.data !== position) {
            currentNode = currentNode.next;
        }

        if(currentNode.next == null && currentNode.data !== position) {
            return 'not found'
        }

        // this moves to the last child
        while(currentNode.child !== null) {
            currentNode = currentNode.child;
        }
        currentNode.child = new Node(data)
    }

    insertNodeAfterPosition(position, data) {
        let currentNode = this.headNode;

        while(currentNode.next !== null && currentNode.data !== position) {
            currentNode = currentNode.next;
        }

        if(currentNode.next !== null && currentNode.data == position) {
            let nextNode = currentNode.next;
            let newNode = new Node(data);
            currentNode.next = newNode;
            newNode.next = nextNode;
        } else {
            currentNode.next = new Node(data);
        }
    }


}

function double() {
    const list = new DoublyLinkedList(1);
    list.insertNodeAtEnd(2);
    list.insertNodeAtEnd(3);
    list.insertChildNode(2, 4);
    list.insertChildNode(2, 5);

    console.log(JSON.stringify(list));
}

double();