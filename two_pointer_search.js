function searchForAnElement(element, array) {

    for(let i = 0, j = array.length - 1; i <= (array.length / 2); i++, j--) {
        if(element == array[i]) return i;
        if(element == array[j]) return j;
    }

    return -1;
}

let array = [2, 3, 1, 6, 9, 7, 11, 5, 10, 33, 22, 21];
console.log(searchForAnElement(22, array));