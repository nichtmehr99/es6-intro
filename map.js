const numbers = [4, 3, 2, 6, 10];

const doubleIt = numbers.map(function (number) {
  return number * 2;
});
// console.log(doubleIt)

const doubleNumbers = numbers.map(number => number*2)
// console.log(doubleNumbers)
// const doubled =[]
// for(const num of numbers){
//     const double = num*2
//     doubled.push(double)
// }
// // console.log(doubled)

// function joraNumber(numbers){
//     for (const num of numbers){
//         const joraNum = num*2
//         doubled.push(joraNum)
//     }
//     return doubled
// }
// console.log(doubled)




const myArray = [1,2,3,4,5]
// const tripleIt = myArray.map(element => element*3)
// console.log(tripleIt)
const tripleIt = myArray.map(function(element){
    return element*3
})
console.log(tripleIt)