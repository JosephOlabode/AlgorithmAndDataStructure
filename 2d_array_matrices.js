// Time: O(n ^ 2), Space: O(1)
const normal2DTraversal = function(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
        }
    }
}