function primeNumbers(number) {
    dividingNumber = []
    primeDividing = []
    for (i = 0; i <= number; i++) {
        if (number % i === 0) {
            dividingNumber.push(i)
        }
    }

    function isPrime(number) {
        // dividers = 0
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                return false //retur false ve return true yaptığımız için return true altındaki kodlara gerek kalmadı 
            }
        }
        return true
        // if (dividers > 0) {
        //     return false
        // } else {
        //     return true
        // }
        // buna alternatif yontem olarak 
        // if (dividers > 0){
        //  return false
        // }
        // return true
    }

    for (k = 0; k < dividingNumber.length; k++) {
        currentNumber = dividingNumber[k]
        if (currentNumber !== 1 && isPrime(currentNumber)) {
            primeDividing.push(currentNumber)
        }
    }

    return primeDividing
}

console.log(primeNumbers(10))