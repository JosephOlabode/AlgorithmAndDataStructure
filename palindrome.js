function checkIfIsPalindrome(string) {
    const formatted = string.toLowerCase().replace(/[~A-Za-z0-9]/g, '');
    for(let i = 0, j = formatted.length -1; i < formatted.length; i++, j--) {
        if(formatted[i] !== formatted[j]) {
            return false;
        }
    }
    return true;
}


const string = "amanaplanacanalpanama";
console.log(checkIfIsPalindrome(string));