// formula for finding the parent of a node in max heap assuming
// that the heap was received in the form of an array
// parent = floor((indexOfNode - 1) / 2)
// [ 50, 40, 25, 20, 35, 10, 15] the parent of node 10 will be 25
// left = (indexOfNode * 2) + 1
// right = (indexOfNode * 2) + 2

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this._heap.length == 0 ? true: false;
    }

    peek() {
        if(!this.isEmpty()) {
            return this._heap[0]
        }
    }
}