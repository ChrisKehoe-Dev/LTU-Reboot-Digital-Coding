function shoppingCartTotal ( arr ) {
    var totalPrice = 0
    var currPrice
    for ( shopIndex = 0; shopIndex < arr.length; shopIndex++) {
        console.log(`Item ${shopIndex + 1}. ${arr[shopIndex].name} which is £${arr[shopIndex].price} and we need ${arr[shopIndex].quantity} of them.`)
        currPrice = arr[shopIndex].quantity * arr[shopIndex].price
        //console.log(currPrice)
        totalPrice = totalPrice + currPrice
        //console.log(`Running total is £${totalPrice}`)

    }
    return totalPrice.toFixed(2);
}

console.log(`Total Price for your shopping basket is £${shoppingCartTotal(shoppingCart)}`)

