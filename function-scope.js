// Globle scope (tempConversion, convertedValue1, convertedValue2)
let tempConversion = function(tempFran){
    let temInCel = (tempFran - 32 ) * 5 / 9

    if (temInCel <= 0) {
        let isFreezing = true
    }
    
    return temInCel
}

let convertedValue1 = tempConversion(32)
let convertedValue2 = tempConversion(68)

console.log(convertedValue1)
console.log(convertedValue2)