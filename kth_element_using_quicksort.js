// Time: O(nlogn), Space: O(logn)
function quicksort(array, left, right) {
    if(left < right) {
        const partitionIndex = partition(array, left, right);
        quicksort(array, left, partitionIndex - 1);
        quicksort(array, partitionIndex + 1, right);
    }
}

function partition(array, left, right) {
    const pivotElement = array[right];
    let partitionIndex = left;
    for(let j = left; j < right; j++) {
        if(array[j] < pivotElement) {
            swap(array, partitionIndex, j);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, right);
    return partitionIndex;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


function getKthLargestElement(array, k) {
    const indexToFind = array.length - k;
    quicksort(array, 0, array.length - 1);
    return array[indexToFind];
}