// Hoare's QuickSelect Algorithm

// Time: O(n) or O(n ^ 2), Space: O(1)
function quickSelect(array, left, right, indexToFind) {
    if(left < right) {
        const partitionIndex = partition(array, left, right);
        if(partitionIndex === indexToFind) {
            return array[partitionIndex];
        } else if(indexToFind < partitionIndex) {
            return quickSelect(array, left, partitionIndex -1, indexToFind);
        } else {
            return quickSelect(array, partitionIndex + 1, right, indexToFind);
        }
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
    quickSelect(array, 0, array.length - 1, indexToFind);
    return array[indexToFind];
}