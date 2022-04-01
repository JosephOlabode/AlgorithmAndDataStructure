function breadFirstSearch() {
    let current = root;
    let list = [];
    let queue = [];
    queue.push(current);
    while(queue.length > 0) {
        current = queue.shift();
        list.push(current.value);
        if(current.left) {
            queue.push(current.left);
        }
        if(current.right) {
            queue.push(current.right);
        }
    }

    return list;
}