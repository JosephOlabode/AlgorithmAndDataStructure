function isEquivalent(a, b) {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    if(aProps.length !== bProps.length) {
        return false;
    }

    for(let i = 0; i < aProps.length; i++) {
        let propsName = aProps[i];

        if(a[propsName] !== b[propsName]) {
            return false;
        }
    }

    return true;
}

const person = {
    name: "Joseph",
    age: 26,
    sex: "Male"
}
const person2 = {
    name: "Joseph",
    age: 26,
    sex: "Mal"
}

console.log(isEquivalent(person, person2)); // should return false;