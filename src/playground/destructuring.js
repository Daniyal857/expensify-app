// Object Destructuring

// const person = {
//     name: 'Daniyal',
//     age: 25,
//     location: {
//         city: 'karachi',
//         temp: 29
//     }
// }

// const {name, age} = person;

// const {city, temp} = person.location;

// console.log(`${name} is ${age}`);
// console.log(`It's ${temp} in ${city}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(`${publisherName}.`);

// Array Destructuring

// const address = ['22B baker street', 'london', 'US', '45897'];
// const [, city, state = 'New York', ] = address;
// console.log(`You are in ${city} ${state}.`);

// const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];
// const [itemName, , meduimPrice, ] = item;
// console.log(`A meduim ${itemName} costs ${meduimPrice}`);
