let num = [1, 2, 3, 4, 5, 4, 7];

const result = num.indexOf(4);
console.log(result);

const result2 = num.findIndex((item) => item == 4);
console.log(result2);

const result3 = num.lastIndexOf(4);
console.log(result3);