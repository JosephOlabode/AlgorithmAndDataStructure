function canConstruct(target, wordBank) {
    if(target == '') return true;

    for(let word of wordBank) {
        if(target.indexOf(word) == 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank)) {
                return true;
            }
        }
    }

    return false;
}