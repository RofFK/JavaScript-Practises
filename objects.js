const person = {
    name: 'Baba',
    surname: 'Anne',
    age: 31,
    email: 'baba@anne.com',
    isMarried: false, // ya da true
    getInformation: function () {
        //satır 11de ki kod yerine daha kullanışlı ve kolay olan satır 10da ki kodları kullandm
        // template strings
        return `Name: ${this.name}\nSurname: ${this.surname}\nAge: ${this.age}\nEmail: ${this.email}\nIs Married: ${this.isMarried}`
        //return 'Name ' +  this.name + ' ' + this.surname + ' ' + this.age + ' ' + this.email + ' ' + this.isMarried
    }
}

console.log(person.getInformation())
const department = {
    it: 'IT',
    hr: 'HR'
}

const worker = {
    name: 'ALi',
    department: department.hr
}

console.log(worker)

worker.department = department.it //burda HR olan çalışma yerini IT olarak değiştirdik
worker.name = 'Bababa' //burda ali olan ismi bababa diye değiştirdik //bundan sonra değiştirilmediği sürece
//worker name bababa olacak

console.log(worker)


worker.age = 34 //burda daha önce tanımlamadığımız age özelliğini(property) tanbımlayıp kullananbiliriz

console.log(worker)

worker.hometown = { //ayrıca worker objectine yeni bir function da tanımlayabiliriz
    name: 'Igdir',
    population: 100000
}

console.log(worker)

// const = constant = sabit 
// string int boolean float double bunlarin hepsi primitive(ilkel) type olarak gecer.
// const name = 'Faruk // bu degisken ilerde degistirilemez
// bu yüzden bu ttür durumlar için const yerine let kullanırız (eski sürümlerde hepsi için 'var' kullanılırdı)
let name = 'Faruk'
name = 'Fatih'

console.log(name)


let worker1 = {
    name: 'Ahmet'
}

console.log(worker1)

/**
 * string, boolean, int, float bunlarin hepsi birer type
 * function ayni zamanda bir type
 * 
 * string = 'a' yada ""
 * int = 1
 * boolean = true veya false
 * function // eski
 * () => { // bu bir arrow function dır =>
 * 
 * }
 * 
 */

const aString = 'something'
const aInt = 2
const aBoolean = false

function aFunction(number1) {
    number = number1
}

const aArrowFunction = () => {
    console.log('something')
}

let anotherArrowFunction = () => {
    console.log('another')
}

aArrowFunction()
anotherArrowFunction()


// callback (geri çağırma) bir function 
const sumNumbers = (number1, number2, callback) => {
    const sum = number1 + number2
    callback(sum) //callback functiona sum dparametresini verdik
}

const sum = (value) => {
    console.log(value)
}

sumNumbers(2, 3, sum)

const substractNumbers = (number1, number2, callback) => {
    const result = number1 - number2
    callback(result)
}

/**
 * 
 *  () => {
 * 
 *  }
 */

const a = () => {

}

substractNumbers(7, 4, (result) => {
    console.log(result)
})

substractNumbers(8, 4, function (result) {
    console.log(result)
})



const rectangle = {
    sidelength1: 8,
    sidelength2: 6,
    // area: 8 * 6
    area: function () {
        return this.sidelength1 * this.sidelength2
    }
}

console.log(rectangle.area())
rectangle.sidelength1 = 6
console.log(rectangle.area() + ' m2')

const volumeCalculation = {
    height: 4,
    volume: function() {
        return rectangle.area() * this.height
    }
}
console.log(volumeCalculation.volume() + ' m3')




