const CheckIfIsValidBinarySearchTree = function(root) {
    if(!root) return true;

    return dfs(root,  -Infinity, Infinity);
}

const dfs = function(node, min, max) {
    if(node.value <= min || node.value >= max) {
        return false;
    }
    if(node.left) {
        if(!dfs(node.left, min, node.value)){
            return false;
        }
    }
    if(node.right) {
        if(dfs(node.right, node.value, max)) {
            return false;
        }
    }
    return true;
}