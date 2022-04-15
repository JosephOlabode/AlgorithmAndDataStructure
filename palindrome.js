function checkIfIsPalindrome(string) {
    for(let i = 0, j = formatted.length -1; i < (formatted.length / 2); i++, j--) {
        if(formatted[i] !== formatted[j]) {
            return false;
        }
    }
    return true;
}

// Time: O(n ^ 2), Space: O(1)
function makeItPalindrome(string) {
    string.replace(/[~A-Za-z0-9]/g, '')
    formatted = string.toLowerCase();

    const isPalindrome = checkIfIsPalindrome(string);
    if(isPalindrome) {
        return isPalindrome
    } else {
        for(let i = 0, j = formatted.length -1; i < (formatted.length / 2); i++, j--) {
            if(formatted[i] !== formatted[j]) {
                const new1 = formatted.replace(formatted[i], '');
                const new2 = formatted.replace(formatted[j], '');

                if(checkIfIsPalindrome(new1) || checkIfIsPalindrome(new2)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                continue;
            }
        }
    }
}

function validSubPalindrome(string, left, right) {
    while(left < right) {
        if(string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function makeItPalindrome2(string) {
    let left = 0, right = string.length -1;
    while(left < right) {
        if(string[left] !== string[right]) {
            return validSubPalindrome(string, left + 1, right) || validSubPalindrome(string, left, right -1);
        }

        left++;
        right--;
    }
}


const string = "abcdefdba";
console.log(makeItPalindrome2(string));