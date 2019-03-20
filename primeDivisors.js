import {
    isPrime
} from './isPrime'

export const findPrimeDivisors = (number1) => {
    let primeDividers1 = []
    while (number1 !== 1) {
        for (let i = 2; i <= number1; i++) {
            if (number1 % i === 0 && isPrime(i)) {
                primeDividers1.push(i)
                number1 = number1 / i //while deki number1 değeri her girdiğinde değişecek
                break // for bitecek while geri dönecek bi daha fora girecek
            }
        }
    }
    return primeDividers1
}
// console.log(findPrimeDivisors(33))