export const findGcd = (number1, number2) => {
    let divisorsNumber1 = []
    let divisorsNumber2 = []
    let gcd = []
    let result = 0
    for (let i = 1; i <= number1; i++){
        if(number1 % i === 0){
            divisorsNumber1.push(i)
        }
    }
    for(let k =1; k<= number2; k++){
        if(number2 % k === 0){
            divisorsNumber2.push(k)
        }
    }
    for (let i = 0; i < divisorsNumber1.length; i++) {
        for (let k = 0; k < divisorsNumber2.length; k++) {
            if (divisorsNumber1[i] === divisorsNumber2[k])
                gcd.push(divisorsNumber1[i])
        }
    }
    for (let i = 0; i < gcd.length; i++) {
        if (result < gcd[i]) {
            result = gcd[i]
        }
    }
    return result
}
console.log(findGcd(12, 9))