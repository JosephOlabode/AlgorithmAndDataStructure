function getContainerWithMostWaterCapacity(array) {
    const containerMap = {};
    let max = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = i+ 1; j < array.length; j++) {
            const area = Math.min(array[i], array[j]) * (j - i);
            if(area > max) {
                max = area;
                containerMap[max] = [array[i], array[j]]
            }
        }
    }

    if(max > 0)
        return containerMap[max];

    return null;
}

const containerArray = [7, 1, 2, 3, 9];
console.log(getContainerWithMostWaterCapacity(containerArray));
