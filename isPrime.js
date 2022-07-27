function checkPrime(n) {
    if(n <= 1) return true;

    for(let i = 2; i <= n; i++) {
        if((i % 2) !== 0) {
            return false;
        }
    }
}