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
        let prevNode = this.headNode;
        while(currentNode.next !== null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        if(prevNode == null) {
            currentNode.next = new Node(data);
        } else {
            const newNode = new Node(data);
            currentNode.next = newNode;
            newNode.prev = prevNode;
        }
        
    }

    insertChildNode(position, data) {
        let currentNode = this.headNode;
        while(currentNode.next !== null && currentNode.data !== position) {
            currentNode = currentNode.next;
        }

        if(currentNode.next == null && currentNode.data !== position) {
            return
        }

        if(currentNode.child == null) {
            currentNode.child = new Node(data)
        } else {
            // this moves to the last child
            while(currentNode.child !== null) {
                currentNode = currentNode.child;
            }
            const newNode = new Node(data);
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
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
            newNode.prev = currentNode
        } else {
            const newNode = new Node(data);
            currentNode.next = newNode;
            newNode.prev = currentNode
        }
    }

    //from tutorial
    // Time: O(n), Space: O(1)
    flattenLinkList() {
        if(!this.headNode) return this.headNode;
        let currentNode = this.headNode;
        while(currentNode !== null) {
            if(currentNode.child === null) {
                currentNode = currentNode.next;
            } else {
                let tail = currentNode.child;
                while (tail.next !== null) {
                    tail = tail.next;
                }
                tail.next = currentNode.next;
                if(tail.next !== null) {
                    tail.next.prev = tail;
                }
                currentNode.next = currentNode.child;
                currentNode.next.prev = currentNode;
                currentNode.child = null;
            }
        }
        return this.headNode;
    }

}

function double() {
    const list = new DoublyLinkedList(1);
    list.insertNodeAtEnd(2);
    list.insertNodeAtEnd(3);
    // list.insertChildNode(2, 4);
    // list.insertChildNode(2, 5);
    // list.insertNodeAtEnd(7);
    // list.insertNodeAfterPosition(3, 6);

     console.log(list.headNode.next.prev);
     console.log(list);
}

double();