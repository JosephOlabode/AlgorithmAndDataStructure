// Google question
//Given an array of integers, return the indices of the two
//numbers that add up to a given target

// Time: O(n ^ 2), Space: O(1)
function getPairThatAddUpToTarget(array, target) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            const sum = array[i] + array[j];
            if(sum === target) {
                return [i, j];
            }
        }
    }

    return null;
}

//Time:  O(n ^ 2), Space: O(1)
function getPairThatAddUpToTarget2(array, target) {
    const length = array.length;
    for(let i = 0; i < length; i++){
        const numbToFind = target - array[i];
        for(let j = i + 1; j < length; j++) {
            if(array[j] === numbToFind) {
                return [i, j]
            }
        }
    }
    return null;
}

// Time: O(n), Space: O(n)
function getPairThatAddUpToTarget3(array, target) {
    const length = array.length;
    const numbMap = {};

    for(let i = 0; i < length; i++) {
        const currentMapVal = numbMap[array[i]];
        if(currentMapVal >= 0) {
            return [currentMapVal, i];
        } else {
            const numbToFind = target - array[i];
            numbMap[numbToFind] = i
        }
    }

    return null
}

const nums = [1, 3, 7, 9, 4];
const target = 11;

console.log(getPairThatAddUpToTarget3(nums, target));