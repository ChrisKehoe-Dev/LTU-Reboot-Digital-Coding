function drinkOrder(size, drink) {
    var drinkLower = drink.toLowerCase()

    switch(drinkLower){
        case "cola":
            console.log("You have ordered a " + size + " " + drink );
            break;
        case "lemonade":
            console.log("You have ordered a " + size + " " + drink );
            break;
        case "orangeade":
            console.log("You have ordered a " + size + " " + drink );
            break;
        default:
            console.log("error")
    }
}

drinkOrder("small","Orangeade")


/* template literals 

instead of using the forced string eg console.log("You have ordered a " + size + " " + drink );
use back tick ` to show the fixed statement and then $() to put brackets in

*/