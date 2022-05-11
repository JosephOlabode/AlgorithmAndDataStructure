
let BST = require('./binary_search_tree.js');
function traverse_by_level(rootNode) {
    const res = [], q = [rootNode];
    while(q.length) {
        const node = q.shift();
        res.push(node.value);
        if(node.left)
            q.push(node.left);
        if(node.right)
            q.push(node.right);
    }
    return res;
}

const bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(3);

console.log(traverse_by_level(bst.root));