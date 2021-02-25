function scFoodDiscount ( arr ) {
    var totalPrice = 0;
    var currPrice = 0;
    var typeDiscounted = "Food";
    var foodDisc = 0;
    var currFoodDisc = 0;
    var totalFoodDisc = 0;

    for ( shopIndex = 0; shopIndex < arr.length; shopIndex++) {
        console.log(`Item ${shopIndex + 1}. ${arr[shopIndex].name} which is £${arr[shopIndex].price} and we need ${arr[shopIndex].quantity} of them.`)
        currPrice = arr[shopIndex].quantity * arr[shopIndex].price
        //switch statement to identify food discount
        switch(arr[shopIndex].type){
            case "food" :
                foodDisc = 0.2
                break;
            default:
                foodDisc = 0
        }
        currFoodDisc = foodDisc * currPrice
        //console.log(currFoodDisc)
        totalFoodDisc = totalFoodDisc + currFoodDisc
        //console.log(currPrice)
        totalPrice = totalPrice + currPrice
        //console.log(`Running total is £${totalPrice}`)

    }
    //console.log(totalPrice)
    //console.log(totalFoodDisc)
    return (totalPrice - totalFoodDisc).toFixed(2);
}

console.log(`Total Price for your shopping basket is £${scFoodDiscount(shoppingCart)}`)
