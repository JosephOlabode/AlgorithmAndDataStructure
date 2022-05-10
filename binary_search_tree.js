class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Best case: O(log(n))
// Worst case: O(n)
class BST {
    constructor(){
        this.root = null;
    }

    insert(data) {
        if(this.root == null) {
            this.root = new Node(data);
        } else {
            const node = this.root;
            const searchTree = node => {
                if(data < node.value && node.left) {
                    searchTree(node.left);
                } else if(data < node.value) {
                    node.left = new Node(data);
                } else if(data > node.value && node.right) {
                    searchTree(node.right);
                } else if(data > node.value) {
                    node.right = new Node(data);
                }
            }
            return searchTree(node);
        }
    }

    find(data) {
        if(this.root == null) {
            return false;
        }

        let node = this.root;
        let found = false;

        while(node && !found) {
            if(data < node.value) {
                node = node.left;
            } else if(data > node.value) {
                node = node.right;
            } else {
                found = node;
            }
        }
        return found ? true: false;
    }
}

