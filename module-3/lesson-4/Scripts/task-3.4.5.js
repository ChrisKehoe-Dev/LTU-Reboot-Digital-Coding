let recipe = {
    recipeTitle : 'Chicken Jalfrezi',
    servings : 3,
    ingredients : ['300g chicken breast', 'jalfrezi base', '2 x peppers', '1 onion', 'half head cauliflower', '1 x courgette'],
    directions : ['fry off the onion, peppers and cauliflower, place to one side', 'fry off the chicken', 'add fried vegetables and the courgette, fry together for 2 minutes', 
    'add jalfrezi base, bring to boil then simmer for 20 minutes. add a splash of water to thin as required.',  'serve with rice, naan bread and or poppadums as per your own taste'],
    letsCook : function() {
        console.log(`I'm hungry! Lets cook ${recipe.recipeTitle} `)
    },
    listIngredients : function() {
        console.log(`Ingredients List for ${recipe.recipeTitle} to serve ${recipe.servings} people`)
        for (ingred=0;ingred < recipe.ingredients.length; ingred++) {
            console.log(recipe.ingredients[ingred])
        }
    },
    listDirections : function() {
        console.log(`Directions to cook ${recipe.recipeTitle}`)
        for (dir=0;dir < recipe.directions.length; dir++) {
            console.log(`${dir+1}. ${recipe.directions[dir]}`)
        }
    }
}


recipe.letsCook()
recipe.listIngredients()
recipe.listDirections()