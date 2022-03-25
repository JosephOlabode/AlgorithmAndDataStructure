const nemo = ['nemo'];
const largeArray = new Array(100).fill('nemo');
function findingNemo(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}
findingNemo(largeArray);

