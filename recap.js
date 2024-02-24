const numbers = [2,1,5,6,90,4]
// map example 
const makeDouble = numbers.map(num => num*2)
// console.log(makeDouble)
// for Each
const makeTriple = numbers.forEach(num => num*3)
// console.log(makeTriple) sob kisu ee map er moto but kono kisu ee retrun korbe na
// fiter method meets the condition and retrun full of it. and jodi kono kisu meet na kore then empty array dibe 
const playersAge = [30,55,70,65,45]
const selectedPlayers = playersAge.filter(age => age > 50)
// console.log('the selected players age bellow 50 are', selectedPlayers)

const friends = ['tom','tim','monikia', 'arafat', ' shaila','Shofiqul']
const bigName = friends.find(name => name.length)


console.log(bigName)
