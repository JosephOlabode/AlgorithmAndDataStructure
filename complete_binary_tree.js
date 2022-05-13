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

