(function testing() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const evenNumbers = array.filter((item) => {
        return item % 2 == 0
    });
    console.log('Even: ', evenNumbers);

    const newArray = array.map((item) => {
        return item * 2;
    });
    console.log('New: ', newArray);

    const sum = array.reduce((item, total) => {
        return total += item;
    })

    console.log(sum);

    const numbers = [[1,2,3], [3,8,4], [2,9,3]];
    const result = numbers.flatMap((array) => [array.reduce((item, total) => total += item)]);
    console.log(result);
})();