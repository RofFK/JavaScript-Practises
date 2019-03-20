// const mehmet = {
//     name: 'mehmet',
//     surname: 'ahaha',
//     age: 34
// }

// // const name1 = mehmet.name
// // const surname = mehmet.surname
// // const age = mehmet.age

// const { // buna denir destructuring
//     name,
//     surname,
//     age
// } = mehmet
// console.log({ //süslü parantez içinde yazdığım için object olarak yazacak yani name: faruk gibi
//     name,
//     surname,
//     age
// })
// mehmet.isMarried = false
// const {
//     isMarried
// } = mehmet
// const a = mehmet["name"]

// const something = 'something'

// // export const another = { //export:ihracat yani herhangi başka bir yerde bunu kullnmak için export ettik
// //     some: 'aa'
// }

export const isPrime = (number) => {
    //logic
    //return if number is prime or not
    for (let i = 2; i < number; i++) { //export ettiğimşz için for içinde artık let kullanmamız gerekiyor
        if (number % i === 0) {
            return false
        }
    }
    return true
}

// module.exports = { //eski javascript versiyonu 
//     isPrime,
//     another
// }

// export default { // yeni javascript versiyonu es6
//     isPrime,
//     another
// }