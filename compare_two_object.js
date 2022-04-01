function isEquivalent(a, b) {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    
    if(aProps.length != bProps.length) {
        return false;
    }

    for(let i = 0; i < aProps.length; i++) {
        if(aProps[i] !== bProps[i]){
            return false;
        }
    }

    return true;
}

const a = {
    first_name: 'Joseph',
    last_name: 'Olabode',
    email: 'josepholabode@gmail.com',
    middle_name: function(){}
}
const b = {
    first_name: 'Joseph',
    last_name: 'Olabode',
    email: 'josepholabode@gmail.com',
    middle_name: function(){}
}
console.log(isEquivalent(a,b));
