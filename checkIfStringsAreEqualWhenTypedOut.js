/* Give two strings S and T, return if they equal when both are typed out. Any
'#' that appears in the string counts as a backspace
    "cb#d" => "cd"
*/
// Time: O(n + m), Space: O(n + m)
function checkIfStringAreEqual(S, T) {
    let typedS = '', typedT = '';
    if(S == null && T == null) {
        return true
    }
    if(S == null || T == null) {
        return false
    }

    for(let i = 0; i < S.length; i++){ //O(n)
        if(S.charAt(i) === '#') {
            typedS = typedS.slice(0,  - 1)
           
        } else {
            typedS += S.charAt(i);
        }
    }

    for(let i = 0; i < T.length; i++){ //O(m)
        if(T.charAt(i) === '#') {
            typedT = typedT.slice(0, -1)
        } else {
            typedT += T.charAt(i);
        }
    }

    if(typedS === typedT) {
        return true
    } else {
        return false;
    }
    
}

// Time: O(n + m), Space: O(n + m)
function checkIfStringAreEqual2(S, T) {
    if(S == null && T == null) {
        return true
    }
    if(S == null || T == null) {
        return false
    }
    let typedS = [], typedT = [];
    for(let i = 0; i < S.length; i++) {
        if(S.charAt(i) === '#')
            typedS.pop();
        else 
            typedS.push(S.charAt(i))
    }
    for(let i = 0; i < T.length; i++) {
        if(T.charAt(i) === '#')
            typedT.pop();
        else 
            typedT.push(T.charAt(i))
    }
    if(typedS.length === typedT.length) {
        for(let i = 0; i < typedT.length; i++) {
            if(typedT[i] != typedS[i]){
                return false
            }
        }
        return true
    } else {
        return false;
    }
}

function checkIfStringAreEqual3(S, T) {
    let p1 = S.length - 1, p2 = T.length -1;
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === '#'){
                let backCount = 2;
                while(backCount > 0) {
                    p1--;
                    backCount--;

                    if(S[p1] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }
            if(T[p2] === '#'){
                let backCount = 2;
                while(backCount > 0) {
                    p2--;
                    backCount--;

                    if(T[p2] === '#') {
                        backCount = backCount + 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]){
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true;
}

const s = "ab#z", t = "ac#z";

console.log(checkIfStringAreEqual3(s, t));

