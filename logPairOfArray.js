// log all pairs of array
const boxes = [1, 2, 3, 4, 5, 6];

const result1 = [];
const result2 = [];
// brute force
function logAllPairOfArray(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            result1.push(array[i] + ', ' + array[j]);
        }
    }
}


function logAllPairOfArray2(array) {
    for(let i = 0, j = array.length -1; i < array.length; i++, j--) {
        const nextForward = i + 1;
        const nextBackward = j - 1;
        
        if(nextForward < array.length){
            result2.push(array[i] + ', ' + array[nextForward]);
            result2.push(array[j] + ', ' + array[nextForward]);
        }
    
        if(nextBackward != -1){
            result2.push(array[j] + ', ' + array[nextBackward]);
            result2.push(array[i] + ', ' + array[nextBackward]);
        }
        result2.push(array[i]+ ', '+ array[i]);
        result2.push(array[j] + ', ' + array[j]);
        result2.push(array[i]+ ', '+ array[j]);
        result2.push(array[j] + ', ' + array[i]);
    }
    // for(let i = 0; i < array.length; i++) {
    //     result2.push(array[i]+ ', '+array[0]);
    //     result2.push(array[i]+ ', '+array[1]);
    //     result2.push(array[i]+ ', '+array[2]);
    //     result2.push(array[i]+ ', '+array[3]);
    //     result2.push(array[i]+ ', '+array[4]);
    //     result2.push(array[i]+ ', '+array[5]);
    // }
}

logAllPairOfArray(boxes);
logAllPairOfArray2(boxes);

console.log(result1);
console.log(result1.length);

const unique = result2.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);
console.log(unique.length);
console.log(result2.length);