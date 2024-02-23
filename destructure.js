const actor = {
    name : 'anil Kapor',
    age : 60,
    car : 'Bmw'
}

// const {car , age : boyos} = actor
// console.log(boyos)


// const freinds = ['arfata', 'meeka', 'moiu', 'krisi']
// const [first, , ,last]= freinds
// console.log(first , last)

function tripleIt(x,y,z){
    return[x*3,y*3,z*3]
}

const [num1,num2,num3] = tripleIt(3,4,5)
console.log(num1,num2,num3)


