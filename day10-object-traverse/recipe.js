var salad = {
	"recipe_name": "Basic Fruit Salad", 
	"yields": {
	    	"servings": 6
	  		}, 
	"ingredients": [ 
		{ 
			"apple": {
					"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"banana": {
					"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"orange": {
					"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"grapes": {
					"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		}
	], 
	        
	"steps": [
		{ "step1": "Cut the apple into cubes." },
		{ "step2": "Cut the banana into slices." },
		{ "step3": "Peel the orange, and divide into segments."}, 
		{ "step4": "Combine all ingredients in a bowl." }, 
		{ "step5": "Mix to combine." }
	]
}

function prepareRecipe(recipe) {
    console.log(`RECIPE - ${salad.recipe_name}`);
    console.log(`SERVES - ${salad.yields.servings} people`);
    console.log(`INGREDIENTS -`);

    recipe.ingredients.forEach(function(ingredient) {
        var item = Object.keys(ingredient)[0];
        // console.log(item)
        // console.log(ingredient[item].amounts.amount)
        // console.log(ingredient[item].amounts.unit)
        console.log(`${item} - ${ingredient[item].amounts.amount} ${ingredient[item].amounts.unit}`)
    });

    console.log(`STEPS -`);

    recipe.steps.forEach(function(step) {
        var cutItemKeys = Object.keys(step)[0];
        var cutItemValues = Object.values(step)[0];
        console.log(`${cutItemKeys} - ${cutItemValues}`);
    });
}

console.log(prepareRecipe(salad));

// recipeHeading(recipe)
// recipeServing(recipe)
// ingredientList(ingredient) -- ?
// stepList(step) -- ?

// function prepareRecipe(recipe) {
    
//     function recipeHeading(recipe) {
//         return `RECEIPE - ${recipe.recipe_name}`;
//     }
//     console.log(recipeHeading(salad));
    
//     function recipeServing(recipe) {
//         return `SERVES - ${salad.yields.servings} people`;
//     }
//     console.log(recipeServing(salad));
    
//     console.log(`INGREDIENTS -`);

//     function ingredientList(recipe) {
//         recipe.ingredients.forEach(function(ingredient) {
//            var item = Object.keys(ingredient)[0];
//            console.log(`${item} - ${ingredient[item].amounts.amount} ${ingredient[item].amounts.unit}`);
//         });
//     }
//     console.log(ingredientList(salad));
    
//     console.log(`STEPS -`);

//     function stepList(recipe) {
//         recipe.steps.forEach(function(step) {
//             var cutItemKeys = Object.keys(step)[0];
//             var cutItemValues = Object.values(step)[0];
//             console.log(`STEPS - ${cutItemKeys} - ${cutItemValues}`); 
//         });
//     }
//     console.log(stepList(salad));

// }

// console.log(prepareRecipe(salad));