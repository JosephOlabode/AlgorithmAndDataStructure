function trapRainWater(array) {
    let totalWater = 0;

    for(let i = 0; i < array.length; i++) {
        let leftp = i, rightp = i, maxLeft = 0, maxRight = 0;

        while(leftp >= 0) {
            maxLeft = Math.max(maxLeft, array[leftp]);
            leftp--;
        }
        while(rightp < array.length) {
            maxRight = Math.max(maxRight, array[rightp]);
            rightp++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - array[i];

        if(currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
}

function trapRainWater2(array){

}

const rainWaterArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
console.log(trapRainWater(rainWaterArray))