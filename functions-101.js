// Function - input (argument), code, output (return value)

//Define a function
let greetUser = function(){
    console.log('Welcome user!')
}

greetUser()

let square = function(num){
let result = num * num 
return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

let tempConversion = function(tempFran){
    let temInCel = (tempFran - 32 ) * 5 / 9
    return temInCel
}

let convertedValue1 = tempConversion(32)
let convertedValue2 = tempConversion(68)

console.log(convertedValue1)
console.log(convertedValue2)
