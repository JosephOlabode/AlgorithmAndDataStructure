const BST = require('./binary_search_tree');
const traverse = function(rootNode, nodeArray = []) {
    if(!rootNode) return nodeArray;
    nodeArray.push(rootNode.value);

    if(rootNode.left) {
        traverse(rootNode.left, nodeArray);
    }
    if(rootNode.right) {
        traverse(rootNode.right, nodeArray);
    }
    return nodeArray;
}

const bst = new BST();
bst.insert(11);
bst.insert(7);
bst.insert(12);
bst.insert(5);
bst.insert(9);
bst.insert(4);
bst.insert(13);
bst.insert(8);
bst.insert(10);

console.log(traverse(bst.root));


const countNodes = function (root) {
    if(!root) return 0;
    const height = getTreeHeight(root);
    if(height == 0) return 1;
    const upperCount = Math.pow(2, height) - 1;

    let left = 0, right = upperCount;
    while(left < right) {
        let indexToFind = Math.ceil((left + right) / 2);
        if(nodeExist(indexToFind, height, root)) {
            left = indexToFind;
        } else {
            right = indexToFind - 1;
        }
    }

    return upperCount + left + 1;
}


const getTreeHeight = function(root) {
    let height = 0;
    while(root.left !== null) {
        height++;
        root = root.left;
    }
    return height;
}

const nodeExist = function(indexToFind, height, node) {
    let left = 0, right = Math.pow(2, height) -1, count = 0;
    while(count < height) {
        let midOfNode = Math.ceil((left + right) /2);
        if(indexToFind >= midOfNode) {
            node = node.right;
            left = midOfNode;
        } else {
            node = node.left;
            right = midOfNode - 1;
        }

        count++;
    }

    return node !== null;
}