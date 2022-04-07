/* Give two strings S and T, return if they equal when both are typed out. Any
'#' that appears in the string counts as a backspace
    "cb#d" => "cd"
*/

function checkIfStringAreEqual(S, T) {
    let typedS = '', typedT = '';
    if(S == null && T == null) {
        return true
    }
    if(S == null || T == null) {
        return false
    }

    for(let i = 0; i < S.length; i++){
        if(S.charAt(i) === '#') {
            typedS = typedS.slice(0,  - 1)
           
        } else {
            typedS += S.charAt(i);
        }
    }

    for(let i = 0; i < T.length; i++){
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

const s = null, t = null;

console.log(checkIfStringAreEqual2(s, t));

