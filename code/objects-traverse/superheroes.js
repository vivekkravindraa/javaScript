var superHeroes = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]

function superPower(a,b){
    if(b.length === 0) {
        return `invalid input`;
    }
    var result = a.find(function(superHero) {
        return superHero['name'] === b;
    });
    if(result) {
        return result['powers'].join(', ');
    } else {
        return `${b} is not in the super heroes list`;
    }
}
console.log(superPower(superHeroes, 'Molecule Man'));
console.log(superPower(superHeroes, 'Iron Man'));