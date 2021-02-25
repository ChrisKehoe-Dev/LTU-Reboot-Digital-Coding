function scVarDiscount ( arr , discountAmount, type ) {
    var totalPrice = 0;
    var currPrice = 0;
    //var typeDiscounted = "Food";
    var discPerct = 0;
    var currDisc = 0;
    var totalDisc = 0;

    for ( shopIndex = 0; shopIndex < arr.length; shopIndex++) {
        console.log(`Item ${shopIndex + 1}. ${arr[shopIndex].name} which is £${arr[shopIndex].price} and we need ${arr[shopIndex].quantity} of them.`)
        currPrice = arr[shopIndex].quantity * arr[shopIndex].price
        //switch statement to identify food discount
       /* switch(arr[shopIndex].type){
            case "food" :
                foodDisc = 0.2
                break;
            default:
                foodDisc = 0
        }*/
        if ( arr[shopIndex].type === type) {
            discPerct = ( discountAmount / 100 )
        }
        else if  (type.toLowerCase() === "any") {
            discPerct = ( discountAmount / 100 )
        }
        else {
            discPerct = 0
        }


        currDisc = discPerct * currPrice
        //console.log(currDisc)
        totalDisc = totalDisc + currDisc
        //console.log(currPrice)
        totalPrice = totalPrice + currPrice
        //console.log(`Running total is £${totalPrice}`)

    }
    //console.log(totalPrice)
    //console.log(totalFoodDisc)
    return (totalPrice - totalDisc).toFixed(2);
}

console.log(`Total Price for your shopping basket is £${scVarDiscount(shoppingCart, 50, "home")}`)