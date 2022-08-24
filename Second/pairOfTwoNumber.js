let array = [1, 3, 7, 9, 2];
let target = 11;

// first solution
// brute force approach Time: O(n ^ 2), Space: O(1)
function findPairSum(array, target) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === target) {
                return [i, j]
            }
        }
    }
    return null;
}


//second solution
// I will use two pointer technique, Time: O(n), Space: O(1)
function findPairSum2(array, target) {
    for(let i = 0, j = i + 1; i < array.length && j < array.length; i++, j++) {
        if(array[i] + array[j] === target) {
            return [i, j]
        }
    }

    return null;
}


// third solution
// I will use the arithmetic difference method
//Time: O(n ^ 2), Space: O(1)
function findPairSum3(array, target) {
    for(let i = 0; i < array.length; i++) {
        let numToFind = target - array[i];
        const result = findNumber(numToFind, array);
        if(result > -1){
            return [i, result];
        }
    }
    return null;
}

function findNumber(num, array) {
    return array.indexOf(num);
}


console.log(findPairSum3(array, target));