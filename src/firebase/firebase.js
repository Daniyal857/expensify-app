import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC1S3VaZXrThAgkgN7rqxUKyVq-uPk9ctc",
    authDomain: "expensifyapp-2eab0.firebaseapp.com",
    databaseURL: "https://expensifyapp-2eab0.firebaseio.com",
    projectId: "expensifyapp-2eab0",
    storageBucket: "expensifyapp-2eab0.appspot.com",
    messagingSenderId: "126100334276"
};
firebase.initializeApp(config);

const database = firebase.database();

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//         .on('value', (snapshot) => {
//                 const expenses = [];

//                 snapshot.forEach((childSnapshot) => {
//                     expenses.push({
//                         id: childSnapshot.key,
//                     ...childSnapshot.val()
//                     });
//                 });
//                 console.log(expenses);
//         });

// database.ref('expenses')
//         .once('value')
//         .then((snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                 ...childSnapshot.val()
//                 });
//             });
            
//             console.log(expenses);
//         });


// database.ref('expenses').push({
//     description:    'Mobile Bill',
//     note:           'new month mobile bill',
//     amount:         500,
//     createdAt:       125000
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a  ${val.job.title} at  ${val.location.city}` );
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 6000);

// setTimeout(() => {
//     database.ref('age').set(27);
// }, 9000);

// database.ref('location/city')
//         .once('value')
//         .then((snapshot) => {
//             const val = snapshot.val();
//             console.log(val);
//         })
//         .catch((e) => {
//             console.log('Error fetching data', e);
//         });

// database.ref().set({
//     name: 'Daniyal Khan',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Karachi',
//         Country: 'Pakistan'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });


// database.ref('age').set(26);
// database.ref('location/city').set('Lahore');

// database.ref('attributes').set({
//     height: 5.6,
//     weight: 65
// }).then(() => {
//     console.log('atributes is saved');
// }).catch((e) => {
//     console.log('failed att', e);
// });

// database.ref('isSingle')
//         .remove()
//         .then(() => {
//             console.log('Data was removed');
//         })
//         .catch((e) => {
//             console.log('did not remove data', e);
//         });

// database.ref().update({
//     name: 'Daniyal',
//     age: 25,
//     job: 'Software Developer',
//     isSingle: null
// });

// database.ref().update({
//     stressLevel:        9,
//     'job/company':      'Amazone',
//     'location/city':    'Seattle' 
// });
