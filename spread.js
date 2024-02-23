const big = Math.max(30,9,80,83,100)
// console.log(big)
const numbers = [30,9,80,83,100]
const arrayMax = Math.max(...numbers)
// console.log(arrayMax)


const num1 = [1,2,3,4]
const num2 = [...num1]
num2.push(5)
console.log(num2)
const num3 = [...num2]
num3.pop()
console.log(num3)
