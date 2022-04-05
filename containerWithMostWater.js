// Time: O(n ^ 2), Space: O(1)
function getContainerWithMostWaterCapacity(array) {
    //const containerMap = {};
    let max = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = i+ 1; j < array.length; j++) {
            const area = Math.min(array[i], array[j]) * (j - i);
            if(area > max) {
                max = area;
                //containerMap[max] = [array[i], array[j]]
            }
        }
    }

    //if(max > 0)
    //    return containerMap[max];

    //return null
    return max;
}

// Time: O(n), Space: O(1)
function getContainerWithMostWaterCapacity2(array) {
    let i = 0, j = array.length - 1, maxArea = 0;

    while(i <= j) {
        const height = Math.min(array[i], array[j]);
        const width = j - i;
        const area = height * width;
        maxArea = Math.max(maxArea, area);

        if(array[i] <= array[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
}

const containerArray = [4, 8, 1, 2, 3, 9]//[7, 1, 2, 3, 9];
console.log(getContainerWithMostWaterCapacity2(containerArray));
