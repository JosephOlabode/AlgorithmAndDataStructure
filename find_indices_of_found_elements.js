// Time: O(logn)
function binarySearch(array, element) {
    let start = 0;
    let end = array.length - 1;
    
    while(start <= end) {
        let mid = parseInt((start + end) / 2);
        if(element == array[mid]) {
            return checkNextElements(array, mid);
        }
        else if(array[mid] > element) {
            end = mid - 1;
        } 
        else {
            start = mid + 1;
        }
    }
    return [-1, -1];
}

// Time: O(n)
function checkNextElements(array, index) {
    let left = index;
    let right = index;
    while(array[left - 1] == array[index]) {
        left--;
    }
    while(array[right + 1] == array[index]) {
        right++;
    }
    return [left, right]
}

// Time: O(nlogn), Space: O(1)
function findIndicesOfFoundElement(array, target) {
    const result = binarySearch(array, target);

    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(findIndicesOfFoundElement(array, 12));