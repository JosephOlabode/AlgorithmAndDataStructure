const nemo = ['nemo'];
const largeArray = new Array(100).fill('nemo');
function findingNemo(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}
//findingNemo(largeArray);


const obj = {
    name: 'Joseph',
    last_name: 'oLaboDe',
    state_of_origin: {
        label: 'Anambra',
        value: 'Anambra'
    }
}
const value = obj.state_of_origin.value.toLowerCase();
const newObj = {
    value: obj.state_of_origin.value.toLowerCase(),
    name: 'Joseph'
}
console.log(newObj);
console.log(JSON.stringify(obj));
