// const nemo = ['nemo'];
// const largeArray = new Array(100).fill('nemo');
// function findingNemo(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === 'nemo') {
//             console.log('Found NEMO!');
//         }
//     }
// }
// //findingNemo(largeArray);

// const obj = {
//     name: 'Joseph',
//     last_name: 'oLaboDe',
//     state_of_origin: {
//         label: 'Anambra',
//         value: 'Anambra'
//     }
// }
// const value = obj.state_of_origin.value.toLowerCase();
// const newObj = {
//     value: obj.state_of_origin.value.toLowerCase(),
//     name: 'Joseph'
// }
// console.log(newObj);
// console.log(JSON.stringify(obj));
const path = require("path");
const fs = require("fs");
//joining path of directory

async function getFilePaths() {
  const directoryPath = path.join(__dirname, "Second");
  const pathArray = [];

  const files = await fs.promises.readdir(directoryPath);
  for (let file of files) {
    pathArray.push(`${directoryPath}/${file}`);
  }

  console.log(pathArray);
  return pathArray;
}

getFilePaths();
