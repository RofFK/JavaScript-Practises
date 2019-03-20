import {
    findPrimeDivisors
} from './primeDivisors'


const calculeteLcd = (number1, number2) => {
    const primeDivisorsOfNumber1 = findPrimeDivisors(number1) // 2 2 3 
    const primeDivisorsOfNumber2 = findPrimeDivisors(number2) // 2 2 2 5
    let lcd = primeDivisorsOfNumber1
    let result = 1
    for (let i = 0; i < primeDivisorsOfNumber1.length; i++) {
        for (let k = 0; k < primeDivisorsOfNumber2.length; k++) {
            if (primeDivisorsOfNumber1[i] === primeDivisorsOfNumber2[k]) {
                const number = primeDivisorsOfNumber1[i]
                let count1 = 0
                let count2 = 0
                let indexOfNumber

                for (let t = 0; t < primeDivisorsOfNumber1.length; t++) {
                    if (primeDivisorsOfNumber1[t] === number) {
                        count1++
                    }
                }

                for (let j = 0; j < primeDivisorsOfNumber2.length; j++) {
                    if (primeDivisorsOfNumber2[j] === number) {
                        count2++
                        indexOfNumber = j
                    }
                }

                if (count2 > count1) {
                    let z = count2 - count1
                    for (let index = 0; index < z; index++) {
                        lcd.push(number)
                    }
                }

                primeDivisorsOfNumber2[indexOfNumber] = undefined
            }
        }
    }
    console.log(lcd)

    for (let i = 0; i < primeDivisorsOfNumber2.length; i++) {

        /**
         * truthy degerler
         * true, 'ahahha', {name: 'ahmet'}, function herhangiBirFunc(){}
         * const a = 'ahmey'
         * if(){
         *   
         * }
         * 
         * falsy degerler
         * false, '', undefined, null, {}
         */

        if (primeDivisorsOfNumber2[i] !== undefined) {
            lcd.push(primeDivisorsOfNumber2[i])
        }
    }
    for (let i = 0; i < lcd.length; i++) {
        result *= lcd[i]
    }

    return result
}
console.log(calculeteLcd(12, 64))





import {
    findGcd
} from './findGcd'

const findLcd = (number1, number2) => {
    const primeDivisors1 = findPrimeDivisors(number1)
    const primeDivisors2 = findPrimeDivisors(number2)
    let gcd = findGcd(number1, number2)
    let lcd = primeDivisors1
    let result = 1
    let value = 1
    for (let i = 0; i < primeDivisors2.length; i++) {
        lcd.push(primeDivisors2[i])
    }
    for (let i = 0; i < lcd.length; i++) {
        result *= lcd[i]
    }
    value = result / gcd
    return value
}
console.log(findLcd(8, 40))
