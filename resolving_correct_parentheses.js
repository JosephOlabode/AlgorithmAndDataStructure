// Time: O(n), Space: O(n)
function getValidStringWithCorrectParentheses(string) {
    if(string.length == 0) return true;
    let stack = [], indexStack = [];
    let storeBrace;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '{' || string[i] === '(' || string[i] === '[') {
            stack.push(string[i]);
            indexStack.push(i);
        } else {
            switch (string[i]) {
                case '}':
                    storeBrace = stack.pop();
                    if (storeBrace == '{'){
                        indexStack.pop();
                    }
                    break;
                case ']':
                     storeBrace = stack.pop();
                    if (storeBrace == '['){
                        indexStack.pop();
                    }
                    break;
                case ')':
                     storeBrace = stack.pop();
                    if (storeBrace == '('){
                        indexStack.pop();
                    }
                    break;
            }
            
        }
    }
    let validString = string;
    const length = indexStack.length;
    for(let i = 0; i < length; i++) {
        const indexPosition = indexStack.pop();
        const first = validString.slice(0, indexPosition);
        const second = validString.slice(indexPosition + 1)
        validString = first + second;
    }

    return validString;
}

// Tutorial Solution
// Time: O(n), Space: O(n)
function getValidStringWithCorrectParentheses2(str) {
    const res = str.split('');
    const stack = [];

    for(let i = 0; i < res.length; i++) {
        if(res[i] === '(') {
            stack.push(i);
        } else if(res[i] === ')' && stack.length){
            stack.pop();
        } else if(res[i] === ')') {
            res[i] = '';
        }
    }

    while(stack.length) {
        const currentIndex = stack.pop();
        res[currentIndex] = '';
    }

    return res.join('');
}

const string = 'a(b{c(d){f{}';

console.log(getValidStringWithCorrectParentheses(string));