/*function percentageCalculator(number, percentage) {
    return number * (percentage / 100)
}*/

//alternate - use variable in the function

function percentageCalculator(number, percentage) {
    var perctOf = (number * (percentage / 100))
    return perctOf
}
console.log (percentageCalculator(135 , 25.4) )
