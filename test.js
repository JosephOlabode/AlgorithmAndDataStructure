function sum(...args) {
    return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4));

const array = [1, 2, -3, 4, 6, -8];
function filterOps(array) {
    return array.filter(num => num > 0).map(num => num * num);
}

console.log(filterOps(array));

