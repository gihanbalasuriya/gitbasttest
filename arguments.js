// Multiple arguments
let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 5, 5)
console.log(result)

// Default arguments
let getScoreText = function(name = 'Bhagya', playerScore = 0){
    return `name: ${name} - Score: ${playerScore}`
    //return 'name: ' + name + ' Score: ' + playerScore 
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let getTip = function(total, tipPercent = .2){
return total * tipPercent 
}

let total = getTip(40, 0.25)
console.log(total)

let name = 'Jen'
let age = 25
console.log(`Hey, my name is ${name}! I am ${age} years old.`)



let getTip2 = function(total, tipPercent = .2){
   let percentage = tipPercent * 100
   let tip = total * tipPercent
    return `A ${percentage}% tip on $${total} would be $${tip}.`
    }
    
    let total2 = getTip2(60)
    console.log(total2)