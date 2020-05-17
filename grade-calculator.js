
// let getFInalScore = function(studentScore, totalPossibleScore){

//     if (studentScore >= 90 && studentScore <= 100) {
//         let percentage = (studentScore / totalPossibleScore) * 100
//         return `You got a A (${percentage}%)`
//     }else if (studentScore >= 80 && studentScore <= 89) {
//         let percentage = (studentScore / totalPossibleScore) * 100
//         return `You got a B (${percentage}%)`
//     }else if (studentScore >= 70 && studentScore <= 79) {
//         let percentage = (studentScore / totalPossibleScore) * 100
//         return `You got a C (${percentage}%)`
// }   else if (studentScore >= 60 && studentScore <= 69) {
//         let percentage = (studentScore / totalPossibleScore) * 100
//         return `You got a D (${percentage}%)`
// }   else {
//         let percentage = (studentScore / totalPossibleScore) * 100
//         return `You got a F (${percentage}%)`
// }
// }

// let score = getFInalScore(90, 100)
// console.log(score)


// let getFInalScore = function(studentScore, totalPossibleScore = 20){
    
//     let percentage = (studentScore/totalPossibleScore) * 100

//     if (percentage >= 90) {
//         return `You got a A (${percentage}%)`
//     }else if (percentage >= 80 && calculation <= 89) {
//         return `You got a B (${percentage}%)`
//     }else if (percentage >= 70 && percentage <= 79) {
//         return `You got a C (${percentage}%)`
//     }else if (percentage >= 60 && percentage <= 69) {
//         return `You got a D (${percentage}%)`
//     }
//         return `You got a F (${percentage}%)`

// }

// let score = getFInalScore(10)
// console.log(score)

let getFInalScore = function(studentScore, totalPossibleScore = 20){
    
    let percentage = (studentScore/totalPossibleScore) * 100
    let letterGrade = ''

    if (percentage >= 90) {
        letterGrade = 'A'
    }else if (percentage >= 80) {
        letterGrade = 'B'
    }else if (percentage >= 70) {
        letterGrade = 'C'
    }else if (percentage >= 60) {
        letterGrade = 'D'
    }else{
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percentage}%)`
}

let score = getFInalScore(20)
console.log(score)