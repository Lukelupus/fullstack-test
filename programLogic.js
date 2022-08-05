
function allNumbersBellowThousandDivisibleBy(x, y) {
    
    var divisible = []

    for(var i = 1; i<1000; i++) {
        if(i%y === 0) {
            divisible.push(i)
        }
        else if(i%x === 0) {
            divisible.push(i)
        }
    }

    var sum = divisible.reduce((total, num) => {
        return total + num
    }, 0)
    console.log(sum)
}

allNumbersBellowThousandDivisibleBy(3, 5)
