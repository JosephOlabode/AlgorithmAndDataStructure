// Time: O(n), Space: O(n)
function validParentheses(string) {
    if(string.length == 0) return true;
    let stack = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '{' || string[i] === '(' || string[i] === '[') {
            stack.push(string[i]);
        } else {
            switch (string[i]) {
                case '}':
                    if (stack.pop() !== '{') return false;
                    break;
                case ']':
                    if (stack.pop() !== '[') return false;
                    break;
                case ')':
                    if (stack.pop() !== '(') return false;
            }
            
        }
    }
    return true
}

// Time: O(n), Space O(n)
function validParentheses2(string) {
    const parentheses = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    if(string.length === 0) return true;
    let stack = [];
    for(let i = 0; i < string.length; i++) {
        if(parentheses[string[i]]) {
            stack.push(string[i])
        } else {
            const leftBracket = stack.pop();
            const correctBracket = parentheses[leftBracket];

            if(string[i] !== correctBracket) return false;
        }
    }
    return stack.length === 0;

}


const string = '{[()}';
console.log(validParentheses(string));