function recursive(n) {
    if(n%2 === 0 && n%3 === 0 && n%10 === 0) {
        console.log(n)
    }
    else {
        return recursive(n+1)
    }
}

recursive(1)