// Array Methods

const list = [1, 2, 3, 4, 5]
const y = list.pop()
console.log(list)

const list1 = [1, 2, 3]
const x = list1.shift()
console.log(list1)

list1.unshift('f')
console.log(list1)

list1[1] = 'a'
console.log(list1)

list1[3] = 'u'
console.log(list1)

list1[list1.length] = 'k'
console.log(list1)

delete list1[2]
console.log(list1)

list1.splice(2, 2, 'r', 'u')
console.log(list1)

const lists = list1.concat(list)
console.log(lists)

const list2 = lists.slice(5)
console.log(list2)

const list3 = list2.slice(1, 3)
console.log(list3)

const animals = ['dog', 'cat', 'horse', 'mouse', 'monkey', ]
animals.sort()
console.log(animals)

console.log(animals.reverse())

const numbers = [99, 87, 1, 6, 23, 12]
numbers.sort((a, b) => b - a) // || numbers.sort(function(a,b){return b-a})
console.log(numbers)
console.log('the lowest value: ' + numbers[numbers.length - 1])
console.log('the highest value: ' + numbers[0])

const a = new Date()
console.log(a)
console.log(a.toDateString())



const workers = []
const worker1 = {
    name: 'Faruk',
    surname: 'Köysüren',
    age: 24,
    job: 'Mühendis',
    isMarried: true,
}
workers.push(worker1)
const worker2 = {
    name: 'Fatih',
    surname: 'Taşdemir',
    age: 26,
    job: 'Yazılım Geliştirici',
    isMarried: false,
}
workers.push(worker2)
const worker3 = {
    name: 'Murat',
    surname: 'Taşdemir',
    age: 23,
    job: 'Öğrenci',
    isMarried: false,
}
workers.push(worker3)
const worker4 = {
    name: 'Ahmet',
    surname: 'Mehmet',
    age: 28,
    job: 'Öğretmen',
    isMarried: true,
}
workers.push(worker4)
const worker5 = {
    name: 'Şinasi',
    surname: 'Son Şans',
    age: 40,
    job: 'Yazar',
    isMarried: true,
}
workers.push(worker5)


for (let i = 0; i < workers.length; i++) {
    if (workers[i].isMarried === true) {
        console.log(workers[i])
    }
}

const marriedOnes = workers.filter((item) => !item.isMarried)

console.log(marriedOnes)

const ageOlder25 = workers.filter((value) => value.age > 25)
console.log(ageOlder25)

const list4 = [1, 2, 3, 4, 5]
const list5 = list4.map((value) => value * 4)
console.log(list5)