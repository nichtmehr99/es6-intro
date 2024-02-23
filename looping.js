const student = {
    name : 'arafat',
    color : 'white',
    roll : 112,
    height: '5 feet',
    isRich : false
}
for( const key in student){
    const value = student[key]
    // console.log(value)
}

const values = Object.values(student)
for(value of values){
    console.log(value)
}

// console.log(student)