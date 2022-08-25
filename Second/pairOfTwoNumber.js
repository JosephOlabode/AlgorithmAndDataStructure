

// first solution
// brute force approach Time: O(n ^ 2), Space: O(1)
function findPairSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return null;
}

let nums = [3,2,4];
let target = 6;
//second solution
// I will use two pointer technique, Time: O(n), Space: O(n)
function findPairSum2(nums, target) {
    const numObject = {}
    for(let i = 0; i < nums.length; i++) {
        numObject[nums[i]] = i;
    }
    for(let i = 0; i < nums.length; i++) {
        let numToFind = target - nums[i];
        if(!isNaN(numObject[numToFind]) && numObject[numToFind] !== i){
            return [i, numObject[numToFind]];
        }
    }
    return null
}

//third solution 
// Time: O(n), Space: O(n)
function findPairSum3(nums, target) {
    const numObject = {}
    for(let i = 0; i < nums.length; i++) {
        let numToFind = target - nums[i];
        if(!isNaN(numObject[numToFind]) && numObject[numToFind] !== i){
            return [i, numObject[numToFind]];
        } else {
            numObject[nums[i]] = i;
        }
    }
    return null
}

// fourth solution
// I will use the arithmetic difference method
//Time: O(n ^ 2), Space: O(1)
function findPairSum4(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let numToFind = target - nums[i];
        const result = findNumber(numToFind, nums);
        if(result > -1 && i !== result){
            return [i, result];
        }
    }
    return null;
}

function findNumber(num, nums) {
    return nums.indexOf(num);
}


console.log(findPairSum2(nums, target));