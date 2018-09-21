var pets = [
    {
      "name": "Meowsy",
      "species" : "cat",
      "petFoods": [
        {"likes": ["tuna", "catnip"]},
        {"dislikes": ["ham", "zucchini"]}
    ]
    },
    {
      "name": "Barky",
      "species" : "dog",
      "petFoods": [
        {"likes": ["bones", "carrots"]},
        {"dislikes": ["tuna"]}
    ]
    },
    {
      "name": "Purrpaws",
      "species" : "cat",
      "petFoods": [
        {"likes": ["mice"]},
        {"dislikes": ["cookies"]}
    ]
    }
  ]

// console.log(pets[0].name);
// console.log(pets[0].species);
// console.log(pets[0].foods.likes.join(','));

// petDetails(pet);
// return
// return 'Barky the dog likes bones, carrots and dislikes tuna'
// return

// for(var i = 0; i < pets.length; i++) {
// console.log(pets[i]);
// }

// pets.forEach(function(pet) {
// console.log(pet);
// });

function petDetails(pet) {
    return `${pet.name} the ${pet.species} likes ${pet.petFoods[0].likes.join(', ')} and dislikes ${pet.petFoods[1].dislikes.join(', ')}`;
}

pets.forEach(function(pet) {
    // console.log(pet);
    console.log(petDetails(pet));
});

var myPet = {
  "name": "Puppy",
  "species" : "dog",
  "petFoods": [
    {"likes": ["bread","milk"]},
    {"dislikes": ["carrots"]}
  ]
}
console.log(petDetails(myPet));