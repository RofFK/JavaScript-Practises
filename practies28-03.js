const map = (list, operation) => {
    let newList = []
    for (let i = 0; i < list.length; i++) {
        const value = operation(list[i])
        newList.push(value)
    }
    return newList
}
const numbers = [1, 2, 3, 4]
const multiplicationTo2 = map(numbers, (value) => value * 2)
console.log(multiplicationTo2)



const zxc = (eString) => {
    let list = []
    for (let i = 0; i < eString.length; i++) {
        for (let k = 1; k <= eString.length - i; k++) {
            const result = eString.substr(i, k)
            list.push(result)
        }

    }
    return list
}
console.log(zxc('dört'))

