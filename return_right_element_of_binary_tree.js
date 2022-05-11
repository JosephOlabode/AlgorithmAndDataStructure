const BST = require('./binary_search_tree');

// Time: O(n) Space: O(n)
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

        result.push(currentLevelValues[currentLevelValues.length - 1]);
    }

    return result;
}

// not working just a test
const dfs_solution = function(root) {
    if(!root) return [];
    const result = [];
    const stack = [root];

    while(stack.length) {
        const currentNode = stack.pop();
        result.push(currentNode.value);

        if(currentNode.left) {
            stack.push(currentNode.left);
            dfs_solution(currentNode.left);
        }

        if(currentNode.right) {
            stack.push(currentNode.right);
            dfs_solution(currentNode.right);
        }
    }
    return result;
}
// Time: O(n), Space: O(n)
const dfs_solution2 = function(root) {
    const result = [];
    dfs(root, 0, result);
    return result;
}

const dfs = function(node, currentLevel, result) {
    if(!node) return;
    if(currentLevel >= result.length) {
        result.push(node.value);
    }
    if(node.right) {
        dfs(node.right, currentLevel + 1, result);
    }
    if(node.left) {
        dfs(node.left, currentLevel + 1, result);
    }
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

console.log(dfs_solution2(bst.root));