const array = [1, 2, 3, 4, 5, 6];

function moveLeft(array) {
  let first = array[0];

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array[array.length - 1] = first;
}

function moveLeft2(array) {
  let temp = array.shift();
  array.push(temp);
}

console.log(array);
moveLeft2(array);
console.log(array);
