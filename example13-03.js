const fahrenheitToCelsius = (temperature, celsius) => {
    const celsiusValue = (temperature - 32) / 1.8
    celsius(celsiusValue)
}
fahrenheitToCelsius(100, (celsius) => {
    console.log(celsius)
})
const fahrenheitToKelvin = (temperature, kelvin) => {
    fahrenheitToCelsius(temperature, (celsius) => {
        const kelvinValue = (celsius) + 273
        kelvin(kelvinValue)
    })

}
fahrenheitToKelvin(100, (kelvin) => {
    console.log(kelvin)
})



let tlToCurrency = (currency, number, callback) => {
    let value = 0

    switch (currency) {
        case 'USD':
            value = number * 0.18
            break
        case 'EUR':
            value = number * 0.16
            break
        case 'GBP':
            value = number * 0.14
            break
        default:
            value = 0
            break
    }
    callback(value) //return den sonra yazarsam olmaz return finish verir bitirir
    return value
}

tlToCurrency('USD', 600, (value) => {
    console.log(value)
})


function findFibonacci(x) {
    let fibonacci = [0]
    let asd = 1
    for (let i = 0; i < x; i++) {
        fibonacci.push(asd)
        asd += fibonacci[i]
    }
    return fibonacci
}
console.log(findFibonacci(8))




let factorial = (n) => {
    let result = 1
    let i = 1
    while (i <= n) {
        result *= i
        i++
    }
    return result
}
console.log(factorial(5))



const findGcd = (number1, number2, divisors) => {
    let divisiorsNumber1 = []
    let divisiorsNumber2 = []
    for (let i = 0; i <= number1; i++) {
        if (number1 % i === 0) {
            divisiorsNumber1.push(i)
        }
    }
    for (let k = 0; k <= number2; k++) {
        if (number2 % k === 0) {
            divisiorsNumber2.push(k)
        }
    }
    divisors(divisiorsNumber1, divisiorsNumber2)
}

const gcd = (divisiors1, divisiors2) => {
    let list = []
    let result = 0
    for (let i = 0; i < divisiors1.length; i++) {
        for (let k = 0; k < divisiors2.length; k++) {
            if (divisiors1[i] === divisiors2[k])
                list.push(divisiors1[i])
        }
    }
    for (let i = 0; i < list.length; i++) {
        if (result < list[i]) {
            result = list[i]
        }
    }
    return result
}

findGcd(8, 12, (divisiors1, divisiors2) => {
    console.log(gcd(divisiors1, divisiors2))
})




