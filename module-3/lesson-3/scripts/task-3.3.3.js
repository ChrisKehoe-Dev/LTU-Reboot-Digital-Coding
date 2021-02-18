function calculator( number1, number2, operator ){
    let oplow = operator.toLowerCase()

    switch( oplow ){
        case "+":
            console.log(`${number1} ${operator} ${number2} = ${number1 + number2}`)
            break;
        case "-":
            console.log(`${number1} ${operator} ${number2} = ${number1 - number2}`)
            break;
        case "*":
            console.log(`${number1} ${operator} ${number2} = ${number1 * number2}`)
            break;
        case "/":
            console.log(`${number1} ${operator} ${number2} = ${number1 / number2}`)
            break;
        case "%":
            console.log(`${number1} ${operator} ${number2} = ${number1 % number2}`)
            break;
        default:
            console.log( "error" )

    }
}

calculator(8,3,"%")