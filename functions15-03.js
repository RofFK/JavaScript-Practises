// const {
//     isPrime
// } = require('./isPrime') eski javascript 
import { //daha önce bir yerde export ettiğimizi burda import ile kullanıyoruz
    isPrime
} from './isPrime' // ./ yazdıktan sonra çağrılacak function ismi yazılır
import {
    some
} from "./utils/utility"

const findPrimeDividers = (number) => {
    let dividers = []
    for (let index = 1; index < number; index++) {
        if (number % index === 0) {
            if (index !== 1 && isPrime(index)) {
                dividers.push(index)
            }
        }
    }
    return dividers
}

console.log(findPrimeDividers(45))


// import { 
//     isPrime
// } from './isPrime' iki defa import etmeye gerek yok. import statement file ın en üstünde olmalı

const findLcd = (number1, number2) => {
    let primeDividers = []
    // let number1 = number
    for (let i = 2; i <= number1; i++) {
        if (number1 % i === 0) {
            if (isPrime(i)) {
                primeDividers.push(i)
                // number1 = number1 / i
                // for (let k = 2; k <= number1; k++){
                //     if (number1 % k === 0 && isPrime(k)){
                //         primeDividers.push(k)
                //     }
                // }
            }
        }
    }
    for (let i = 2; i <= number2; i++) {
        if (number2 % i === 0) {
            if (isPrime(i)) {
                primeDividers.push(i)
            }
        }

    }
    return primeDividers
}
console.log(findLcd(12, 9))