// Whenever we pass an argumnet of object type i.e array, object, date to the function it will always refer to the variables defined in the global scope

var numbers = [10];

var person = {
    name: 'Ani'
}

// var newPerson = {
//     name: 'vivek'
// }

function changeNumber(numbers) {
    numbers[0] = 100;
    console.log('inside function : ', numbers);
}

function changePerson(tutor) {
    tutor.name = 'Aniruddha';
    console.log('inside function : ', tutor);
}

console.log('before calling function : ', numbers);
changeNumber(numbers);
console.log('after calling & outside function : ', numbers);

console.log('before calling function : ', person);
changePerson(person);
console.log('after calling & outside function : ', person);