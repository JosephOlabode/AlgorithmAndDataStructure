// Time: O(n^2), Space: O(1)
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

// Time: O(n), Space: O(1)
function trapRainWater2(array){
/*
    1. Identify pointer with lesser value
    2. Is this pointer value lesser than or equal to the max on that side
        if yes => update max on that side
        if no => get water for pointer value and add it to total
    3. Move pointer inward
    4. Repeat for the other pointers
*/

    let left = 0, right = array.length -1, maxLeft = 0, maxRight = 0, total = 0;

    while(left < right) {
        if(array[left] <= array[right]) {
            if(array[left] >= maxLeft){
                maxLeft = array[left];
            } else {
                total += maxLeft - array[left];
            }

            left++
        } else {
            if(array[right] >= maxRight){
                maxRight = array[right]
            } else {
                total += maxRight - array[right];
            }
            right--;
        }
    }
    return total;

}

const rainWaterArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
console.log(trapRainWater2(rainWaterArray))