function traverseInorder(node, list) {
    if(node.left){
        traverseInorder(node.left, list)
    }
    list.push(node.value);
    if(node.right){
        traverseInorder(node.right, list)
    }
    return list;
}

function traversePreorder(node, list) {
    list.push(node.value);
    if(node.left){
        traversePreorder(node.left, list)
    }
    if(node.right){
        traversePreorder(node.right, list)
    }
    return list;
}

function traversePostorder(node, list) {
    if(node.left){
        traversePostorder(node.left, list);
    }
    if(node.right) {
        traversePostorder(node.right, list);
    }
    list.push(node.value);

    return list;
}