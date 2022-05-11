const BST = require('./binary_search_tree');

const bfs_solution = function(root) {
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

        //result.push(currentLevelValues);
        result.push(currentLevelValues[currentLevelValues.length - 1]);
    }

    return result;
}

const dfs_solution = function(root) {

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

console.log(bfs_solution(bst.root));