
let BST = require('./binary_search_tree.js');
// Time: O(n), Space: O(n)
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

// Time: O(n), Space: O(n)
const level_order = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];

    while(queue.length) {
        let length = queue.length, count = 0;
        const currentLevelValues = [];

        while(count < length) {
            const currentNode = queue.shift();
            currentLevelValues.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right);
            count++;
        }

        result.push(currentLevelValues);
        
    }
    return result;
}

const bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(3);

console.log(level_order(bst.root));