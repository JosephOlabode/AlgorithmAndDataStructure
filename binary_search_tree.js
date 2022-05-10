class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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
}

const bst = new BST();
console.log(bst.insert(3))
console.log(bst.insert(5));
