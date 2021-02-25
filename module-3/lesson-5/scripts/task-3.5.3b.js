function priceLimits( arr, lowPrice, highPrice, calcType ) {
    let arrItems = []

    for (let index = 0; index < arr.length ; index++ ) {
        
        if(calcType === "individual"){
            if ( arr[ index ].price >= lowPrice && arr[ index ].price <= highPrice ){
                arrItems.push( arr[index].name );
            }
        }
        else {
            if ( (arr[ index ].price * arr[ index ].quantity) >= lowPrice && (arr[ index ].price * arr[ index ].quantity) <= highPrice ){
                arrItems.push( arr[index].name );
            }
        }
    }
return arrItems

}

console.log( priceLimits(shoppingCart, 0, 1, "total"))