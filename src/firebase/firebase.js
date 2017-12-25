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

database.ref().set({
    name: 'Daniyal Khan',
    age: 25,
    isSingle: true,
    location: {
        city: 'Karachi',
        Country: 'Pakistan'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed', e);
});


// database.ref('age').set(26);
// database.ref('location/city').set('Lahore');



database.ref('attributes').set({
    height: 5.6,
    weight: 65
}).then(() => {
    console.log('atributes is saved');
}).catch((e) => {
    console.log('failed att', e);
});
