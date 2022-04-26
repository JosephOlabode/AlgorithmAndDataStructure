// Time: O(logn), Space: O(1)
function binarySearch(array, element) {
    let start = 0;
    let end = array.length - 1;
    
    while(start <= end) {
        let mid = parseInt((start + end) / 2);
        if(element == array[mid]) {
            return mid;
        }
        else if(array[mid] > element) {
            end = mid - 1;
        } 
        else {
            start = mid + 1;
        }
    }
    return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array, 7));